"use client";

import { Product } from '../../domain/entities/Product';
import { ProductHero } from '../components/product/ProductHero';
import { ProductSpecifications } from '../components/product/ProductSpecifications';
import { ProductCases } from '../components/product/ProductCases';
import { ProductFAQ } from '../components/product/ProductFAQ';
import { ProductCTA } from '../components/product/ProductCTA';

interface ProductPageLayoutProps {
  product: Product;
}

export function ProductPageLayout({ product }: ProductPageLayoutProps) {
  return (
    <div className="product-page">
      {/* Hero-блок */}
      <ProductHero product={product} />
      
      {/* Технические характеристики с преимуществами и сферами применения */}
      <ProductSpecifications 
        specifications={product.technicalSpecs}
        advantages={product.advantages}
        applications={product.applications}
      />
      
      {/* Кейсы и проекты */}
      {/* <ProductCases cases={product.cases} /> */}
      
      {/* FAQ */}
      <ProductFAQ faqs={product.faqs} />
      
      {/* CTA блок */}
      <ProductCTA product={product} />
    </div>
  );
}
