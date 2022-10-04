import { useState } from 'react';
import useDrivePicker from 'react-google-drive-picker'

const useGoogleDrive = () => {
    const [data, setData] = useState();

    const [openPicker] = useDrivePicker();

    const convertArrayToObject = (array, key) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
          return {
            ...obj,
            docs: item,
          };
        }, initialValue);
      };

    const handleOpenPicker = () => {
        openPicker({
            clientId: process.env.REACT_APP_CLIENT_ID,
            developerKey: process.env.REACT_APP_DEVELOPER_KEY,
            viewId: "DOCS_VIDEOS",
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            callbackFunction: (data) => {
                if (data.action === 'cancel') console.log('User clicked cancel/close button');
                const dataObj = convertArrayToObject(data?.docs);
                setData(dataObj);
            },
        });
    }

    return { handleOpenPicker, data };
}

export default useGoogleDrive;