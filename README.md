# Cloudinary / Node  
[Cloudinary Image Upload with Nodejs and React](https://www.youtube.com/watch?v=Rw_QeJLnCK4)  
James Q Quick  
34m:32s  
  
when configuring the proxy in vite.config.js:  
assign the port on the server a DIFFERENT port number than the front end,  
then reference the SERVER PORT NUMBER!!!  
you will proxy the front end TO the back end  
  
.../server$ node --watch --env-file=../.env server.js  
  
MAX SIZE FOR IMAGE FILES BASE64 ENCODED: 1MB  


