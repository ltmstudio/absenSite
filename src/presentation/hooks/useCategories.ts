"use client";

import { useState, useEffect } from 'react';
import { Category, Banner, CompanyInfo } from '../../domain/entities/Category';
import { GetCategoriesUseCase, GetBannersUseCase, GetCompanyInfoUseCase } from '../../domain/usecases/GetCategoriesUseCase';
import { CategoryRepositoryImpl, BannerRepositoryImpl, CompanyRepositoryImpl } from '../../data/repositories/CategoryRepositoryImpl';

// Хук для работы с категориями
export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const categoryRepository = new CategoryRepositoryImpl();
        const getCategoriesUseCase = new GetCategoriesUseCase(categoryRepository);
        const data = await getCategoriesUseCase.execute();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error };
}

// Хук для работы с баннерами
export function useBanners() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBanners = async () => {
      try {
        setLoading(true);
        const bannerRepository = new BannerRepositoryImpl();
        const getBannersUseCase = new GetBannersUseCase(bannerRepository);
        const data = await getBannersUseCase.execute();
        setBanners(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadBanners();
  }, []);

  return { banners, loading, error };
}

// Хук для работы с информацией о компании
export function useCompanyInfo() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCompanyInfo = async () => {
      try {
        setLoading(true);
        const companyRepository = new CompanyRepositoryImpl();
        const getCompanyInfoUseCase = new GetCompanyInfoUseCase(companyRepository);
        const data = await getCompanyInfoUseCase.execute();
        setCompanyInfo(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadCompanyInfo();
  }, []);

  return { companyInfo, loading, error };
}
