const API_BASE_URL = 'https://prod.api.compressvideo.in/api/compress';

const compressFile = async (file, fileType) => {
    try {
        console.log(`Preparing to compress ${fileType} file:`, file.name);
        
        const formData = new FormData();
        formData.append('file', file);

        const endpoint = `${API_BASE_URL}/${fileType}/`;
        console.log('Sending request to:', endpoint);
        
        const response = await fetch(endpoint, {
            method: 'POST',
            body: formData,
        });
        
        const data = await response.json();
        if (!response.ok && data.message) {
            throw new Error(`${data.message}`);
        }
        console.log(`${fileType} compression response:`, data);
        
        return {
            success: true,
            data,
        };
    } catch (error) {
        console.error(`Error compressing ${fileType} file:`, error);
        return {
            success: false,
            error: error.message,
        };
    }
};

export const compressApi = {
    compressImage: (file) => compressFile(file, 'image'),
    compressVideo: (file) => compressFile(file, 'video'),
    compressPdf: (file) => compressFile(file, 'pdf'),
    compressDoc: (file) => compressFile(file, 'docx'),
};
