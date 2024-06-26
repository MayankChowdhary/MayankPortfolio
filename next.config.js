const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to', 'picsum.photos', 'raw.githubusercontent.com','drive.google.com','accounts.google.com']
  },
  webpack: (config) => {
      config.resolve.alias.canvas = false;
    
       return config;
     },
}