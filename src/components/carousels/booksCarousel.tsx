'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import api from '@/services/api'
import { useEffect, useState } from 'react';
import Livro from '@/types/livro.type';

interface IResponse {
    dados: Livro[]
}

export default function BooksCarousel(){

    const [bookList, setBookList] = useState<IResponse>({dados: []})

    async function getBooks() {
        const response = await api.get('/livros')
        setBookList(response.data)
    }

    useEffect(()=>{getBooks()}, [])

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={"auto"}
            navigation={{enabled: true, nextEl: ".next", prevEl: ".prev"}}
            pagination={{ dynamicBullets: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            tag='books_carousel'
        >
        {bookList && bookList.dados.map((book) => (
            <SwiperSlide tag='book_card' key={book.id}>
                <div className="image"/>
                <h3>{book.titulo}</h3>
                <p>{book.autor.nome}</p>
                <div className="type">{book.categoria.nome}</div>
            </SwiperSlide>
        ))}
      </Swiper>
    )
}