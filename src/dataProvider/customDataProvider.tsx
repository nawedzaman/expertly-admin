// src/dataProvider.js
import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import axios from 'axios';
const token = localStorage.getItem('authToken');
const apiUrl = 'https://expertly.onrender.com/admin';
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}`;

        return httpClient(url,{headers:new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }),}).then(({ headers, json }) => {
            const dataWithId = json.map((item, index) => ({
                id: item.courseID || item.id , // Generate unique id
                ...item
            }));
            return { 
                data: dataWithId,
                total: json.length,
            } 
        });
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`,{headers:new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }),}).then(({ json }) => {
            json.id=json.id||json.courseID;
            return{data: json} 
        }),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
            headers:new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
            headers:new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE', 
            headers:new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }),
        }).then(({ json }) => ({ data: json })),
        deleteMany: (resource, params) => {
            const promises = params.ids.map(id =>
              httpClient(`${apiUrl}/${resource}/${id}`, {
                method: 'DELETE',
                headers:new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }),
              })
            );
          
            return Promise.all(promises).then(() => ({ data: [] })); // Assuming no response data on success
          },
};

export default dataProvider;
