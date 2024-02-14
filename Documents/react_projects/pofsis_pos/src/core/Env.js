export const env = () => (process.env.REACT_APP_ENV)

export const domain = (key) => {
    const loc = window.location.pathname
    const subdir = loc.split('/')[1]
    const list = {
        tool: {
            url: subdir === 'psl' ? process.env.REACT_APP_URL_TOOL_PSL : process.env.REACT_APP_URL_TOOL_BIZ,
            ws: process.env.REACT_APP_WS_URL
        },
        pm: {
            url: process.env.REACT_APP_URL_PM,
            ws: process.env.REACT_APP_WS_URL_PM
        },
        psl: {
            url: process.env.REACT_APP_URL_PSL,
            ws: process.env.REACT_APP_WS_URL_PSL
        },
        biz: {
            url: process.env.REACT_APP_URL_BIZ,
            ws: process.env.REACT_APP_WS_URL_BIZ
        },
        mp: {
            url: process.env.REACT_APP_URL_MP,
            ws: process.env.REACT_APP_WS_URL_MP
        },
        api: {
            tool: subdir === 'psl' ? process.env.REACT_APP_API_URL_TOOL_PSL : process.env.REACT_APP_API_URL_TOOL_BIZ,
            global: process.env.REACT_APP_API_URL_GLOBAL,
        }
    }

    return list[key]
}

export const key = (key) => {
    const loc = window.location.pathname
    const subdir = loc.split('/')[1]
    const list = {
        gapi_key: process.env.REACT_APP_POF_GLOBAL_API_KEY,
        tapi_key: subdir === 'psl' ? process.env.REACT_APP_TOOL_API_KEY_PSL: process.env.REACT_APP_TOOL_API_KEY_BIZ,
        aui_key: subdir === 'psl' ? process.env.REACT_APP_AUI_KEY_PSL : process.env.REACT_APP_AUI_KEY_BIZ,
        tsa_key: subdir === 'psl' ?  process.env.REACT_APP_TSA_KEY_PSL : process.env.REACT_APP_TSA_KEY_BIZ,
        tid: subdir === 'psl' ? process.env.REACT_APP_TID_PSL : process.env.REACT_APP_TID_BIZ
    }

    return list[key]
}

export const aws = (key) => {
    const list = {
        secret_key: process.env.REACT_APP_AWSS3_SECRET_ACCESS_KEY,
        access_key: process.env.REACT_APP_AWSS3_ACCESS_KEY_ID,
        bucket_name: process.env.REACT_APP_AWSS3_BUCKET_NAME,
        region: process.env.REACT_APP_AWSS3_REGION,
    }

    return list[key]
} 