import { Injectable } from '@nestjs/common';
import sharp from 'sharp';

@Injectable()
export class SharpImageConverter {

    async toWebp(inputBuffer: Buffer, quality: number = 80) {
        return await sharp(inputBuffer).webp({ quality }).toBuffer()
    }
}