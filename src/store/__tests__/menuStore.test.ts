import { describe, it, expect, beforeEach } from 'vitest';
import { useMenuStore } from '@/store/menuStore';

describe('Menu Store', () => {
  beforeEach(() => {
    // Reset the store before each test
    useMenuStore.setState({ searchQuery: '', selectedCategory: 'all' });
  });

  it('should set search query', () => {
    const { setSearchQuery } = useMenuStore.getState();
    
    setSearchQuery('tonkotsu');
    
    expect(useMenuStore.getState().searchQuery).toBe('tonkotsu');
  });

  it('should set selected category', () => {
    const { setSelectedCategory } = useMenuStore.getState();
    
    setSelectedCategory('ramen');
    
    expect(useMenuStore.getState().selectedCategory).toBe('ramen');
  });

  it('should reset filters', () => {
    useMenuStore.setState({
      searchQuery: 'test',
      selectedCategory: 'sides',
    });

    const { resetFilters } = useMenuStore.getState();
    resetFilters();
    
    expect(useMenuStore.getState().searchQuery).toBe('');
    expect(useMenuStore.getState().selectedCategory).toBe('all');
  });
});
