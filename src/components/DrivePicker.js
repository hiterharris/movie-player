// import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'


function DrivePicker() {
    const [openPicker, authResponse] = useDrivePicker();  
    // const customViews  Array = [new google.picker.DocsView()]; // custom view
    const handleOpenPicker = () => {
        openPicker({
            clientId: process.env.REACT_APP_CLIENT_ID,
            developerKey: process.env.REACT_APP_DEVELOPER_KEY,
            viewId: "DOCS_VIDEOS",
            // token: token, // pass oauth token in case you already have one
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            // customViews: customViewsArray, // custom view
            callbackFunction: (data) => {
            if (data.action === 'cancel') {
                console.log('User clicked cancel/close button')
            }
            console.log('data: ', data)
            console.log('embedUrl: ', data?.docs?.[0].embedUrl)
            console.log('iconUrl: ', data?.docs?.[0].iconUrl)
            console.log('url: ', data?.docs?.[0].url)
            },
        })
    }




    return (
    <div>
        <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
    );
}

export default DrivePicker;
