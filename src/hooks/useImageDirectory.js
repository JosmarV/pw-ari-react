import { useState, useEffect } from 'react';

// Este hook permite cargar imágenes de un directorio específico dentro de los módulos importados.
const useImageDirectory = (modules, projectName) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const allFilePaths = Object.keys(modules)

      const projectFilePaths = allFilePaths.filter(path => path.includes(`/${projectName}/`));
      
      const imageUrls = projectFilePaths.map(path => modules[path].default);

      setImages(imageUrls);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error("Error al procesar los módulos de imágenes:", err);
    }
  }, [modules, projectName]); // El hook se ejecutará de nuevo si el objeto de módulos o el nombre del proyecto cambian

  return { images, loading, error };
};

export default useImageDirectory;