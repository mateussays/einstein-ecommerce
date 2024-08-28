import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import {
  getProducts,
  getCategories,
} from '../services/products-http';
import { Product } from '../types/product';

const ITEMS_PER_PAGE = 9;

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search');
    setSearchQuery(query ? query : null)
    setCurrentPage(1)
  }, [location.search]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let data = await getProducts();

        if (searchQuery) {
          data = data.filter((product: Product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        if (selectedCategory) {
          data = data.filter(
            (product: Product) => product.category === selectedCategory
          );
        }

        const formattedData = data.map((product: Product) => ({
          id: product.id,
          image: product.image,
          price: product.price,
          title: product.title,
          category: product.category,
          totalPrice: product.price,
          quantity: 1,
        }));

        setProducts(formattedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    products: paginatedProducts,
    categories,
    loading,
    currentPage,
    totalPages,
    handlePageChange,
    fetchProductsByCategory: (category: string | null) => {
      setSelectedCategory(category);
    }
  };
};

export default useProducts;
