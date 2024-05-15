import * as React from 'react';
import { SVGProps } from 'react';
import { useTheme } from '@mui/material/styles';

const Logo = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
        // <svg xmlns="http://www.w3.org/2000/svg"
        //     width={234.532}
        //     height={20.475}
        //     viewBox="0 0 62.053 5.417"
        //     {...props}
        // >
        //     <text x="10" y="35" font-size="32" font-family="Arial, sans-serif">Expertly</text>
        // </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={234.532}
          height={50} viewBox="0 0 62.053 5.417">
        <text x="12" y="6" font-size="10" font-family="Arial, sans-serif">Expertly</text>
      </svg>
    );
};

export default Logo;
