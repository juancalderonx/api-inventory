import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoryProduct } from '../catogories/entities/category-product.entity';
import { Category } from '../catogories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(CategoryProduct)
    private readonly categoryProductRepository: Repository<CategoryProduct>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { categories, ...productData } = createProductDto;

    const createdProduct = this.productRepository.create(productData);
    await this.productRepository.save(createdProduct);

    const categoryProducts = [];

    for (const categoryId of categories) {
      const categoryProduct = new CategoryProduct();
      categoryProduct.product = createdProduct;

      const category = await this.categoryRepository.findOneBy({
        id: categoryId,
      });
      categoryProduct.category = category;

      categoryProducts.push(categoryProduct);
    }

    await this.categoryProductRepository.save(categoryProducts);

    return createdProduct;
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.categoryProducts', 'categoryProduct')
      .leftJoinAndSelect('categoryProduct.category', 'category')
      .getMany();

    const transformedProducts = products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      status: product.status,
      creationDate: product.creationDate,
      categories: product.categoryProducts.map((categoryProduct) => ({
        id: categoryProduct.category.id,
        name: categoryProduct.category.name,
        description: categoryProduct.category.description,
        status: categoryProduct.category.status,
      })),
    }));

    return transformedProducts;
  }

  async findOne(productId: number): Promise<Product> {
    const product = await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.categoryProducts', 'categoryProduct')
      .leftJoinAndSelect('categoryProduct.category', 'category')
      .where('product.id = :productId', { productId })
      .getOne();

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
