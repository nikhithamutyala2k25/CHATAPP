

// export const downloadMedia = async (e, originalImage) => {
//     e.preventDefault();
//     try {
//         fetch(originalImage)
//         .then(resp => resp.blob())
//         .then(blob => {
//             const url = window.URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.style.display = 'none';
//             a.href = url;

//             const nameSplit = originalImage.split("/");
//             const duplicateName = nameSplit.pop();

//             // the filename you want
//             a.download = "" + duplicateName + "";
//             document.body.appendChild(a);
//             a.click();
//             window.URL.revokeObjectURL(url);
//         })
//         .catch((error) => console.log('Error while downloading the image ', error))

//     } catch (error) {
//         console.log('Error while downloading the image ', error);
//     }
// }


export const formatDate= (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const hoursIn12HourFormat = hours % 12 || 12;
  
    return `${hoursIn12HourFormat < 10 ? '0' + hoursIn12HourFormat : hoursIn12HourFormat}:${minutes < 10 ? '0' + minutes : minutes} ${amOrPm}`;
  };
  