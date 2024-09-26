import { Injectable } from '@nestjs/common'; // Importa Injectable de @nestjs/common
import { InjectRepository } from '@nestjs/typeorm'; // Importa InjectRepository de @nestjs/typeorm
import { Repository } from 'typeorm'; // Importa Repository de typeorm
import { Product } from './entities/product.entity'; // Importa Product
import { CreateProductDto } from './dto/create-product.dto'; // Importa CreateProductDto
import { UpdateProductDto } from './dto/update-product.dto'; // Importa UpdateProductDto

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) // Injecta el repositorio de Product
    private productsRepository: Repository<Product>, // Usa el repositorio de Product
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find(); // Devuelve todos los productos
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOneBy({ id }); // Encuentra un producto por su ID
  }

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productsRepository.create(createProductDto); // Crea un nuevo producto
    return this.productsRepository.save(product); // Guarda el producto en la base de datos
  }

  update(id: number, updateProductDto: UpdateProductDto): Promise<any> {
    return this.productsRepository.update(id, updateProductDto); // Actualiza un producto por su ID
  }

  remove(id: number): Promise<any> {
    return this.productsRepository.delete(id); // Elimina un producto por su ID
  }
}
