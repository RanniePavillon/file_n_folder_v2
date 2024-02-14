import { Menu, MenuItem, Box, Divider } from '@mui/material';
import { useBarcode } from '@createnextapp/react-barcode'

export const PMenu = ({mdata, setMdata }) => {
  
    const closeMenuHandler = () => {
        setMdata({anchor:null, value:[]})
    }
    
    const downloadHandler = () => {
        const canvas = document.getElementById("posBarcode");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${mdata.value.name}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    const { inputRef } = useBarcode({
        value: mdata.value.barcode,
        options: {
            background: '#FFFFFF',
            textAlign: 'center'
        }
    });
    
    return ( 
        <>
            <canvas style={{display:'none'}} id="posBarcode" ref={inputRef} />
            <Menu
                onClose={closeMenuHandler}
                onClick={closeMenuHandler}
                anchorEl={mdata.anchor}
                open={Boolean(mdata.anchor)}
                autoFocus={false}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem sx={{height:'24px', px:'24px !important', py:'0px !important'}}>
                    <Box fontWeight={400} fontSize={14} lineHeight="16px" color="#283745">Edit</Box>
                </MenuItem>
                <Divider sx={{bgcolor:'#E9F0FB', my:'4px !important'}} />
                <MenuItem sx={{height:'24px', px:'24px !important', py:'0px !important'}} onClick={()=>downloadHandler()}>
                    <Box fontWeight={400} fontSize={14} lineHeight="16px" color="#283745">Download Barcode</Box>
                </MenuItem>
            </Menu>
        </>
    );
}