import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Texts} from '../utils/predefinedUtils'

export default function Footer() {
    return (
        <>
            <div style={{background:'#383888f5',paddingTop:3}}>
                <Typography sx={{ fontSize: { xs: 13, sm: 14 }, fontWeight: 600, paddingTop: 1,paddingLeft:1,color:'#fff' }}>{Texts.FOOTER_TEXT}</Typography>
                <Typography sx={{ fontSize: { xs: 10, sm: 12 }, fontWeight: 600, padding: 1,color:'#fff'}}>{Texts.FOOTER_TEXT_SUB}</Typography>
            </div>
        </>
    );
}