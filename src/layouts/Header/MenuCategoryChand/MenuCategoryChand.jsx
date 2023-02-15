import React from 'react'
import s from './MenuCategoryChand.module.scss'
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Люстры',
    img: 'https://loft-concept.ru/upload/uf/c78/z9h2f9dym2bu4eg33ceh0gihooc35ymc/chandelier.png',
    menuItems: [
      { info: 'Лофт' },
      { info: 'Дизайнерские' },
      { info: 'Классика' },
      { info: 'Прованс' },
      { info: 'Восток' },
      { info: 'Детские' },
      { info: 'Светодиодные' },
      { info: 'Каскадные' },
      { info: 'Линейные, Прямоугольные' },
      { info: 'Многоямрусные' },
      { info: 'Большие люстры' },
      { info: 'Хрустальные, стеклянные' },
      { info: 'Деревянные' },
      { info: 'С птичками' },
      { info: 'Паук' },
    ]
  },
  {
    title: 'Подвесные светилники',
    img: 'https://loft-concept.ru/upload/uf/883/wh8fjjpfcrykhwbsevxjl9vm0kjm1fsn/podvesnye_svetilniki.png',
    menuItems: [
      { info: 'Лофт' },
      { info: 'Дизайнерские' },
      { info: 'Классика' },
      { info: 'Прованс' },
      { info: 'Восток' },
      { info: 'Детские' },
      { info: 'Офисные' },
      { info: 'Геометрические' },
      { info: 'Металл' },
      { info: 'Бетонные светильники' },
      { info: 'Стеклянный плафон' },
      { info: 'Деревянные светильники' },
    ]
  },
  {
    title: 'Потолочные ветильники',
    img: 'https://loft-concept.ru/upload/uf/508/ojer1g1hvm0kcad5aszrdcdp97ixzkch/potolochnye_svetilniki.png',
    menuItems: [
      { info: 'Лофт' },
      { info: 'Дизайнерские' },
      { info: 'Классика' },
      { info: 'Прованс' },
      { info: 'Восток' },
      { info: 'Детские' },
      { info: 'Офисные' },
      { info: 'Диски' },
      { info: 'Вентиляторы' },
      { info: 'Накладные' },
      { info: 'На штанге' },
      { info: 'На кухню' },
      { info: 'Настенно-потолочные' },
    ]
  },
  {
    title: 'Бра, Настенные лампы',
    img: 'https://loft-concept.ru/upload/uf/e2e/mkjhp9qv4r4mliy5xdk4xdbphdowwsf3/bra_nastennye_lampy.png',
    menuItems: [
      { info: 'Лофт' },
      { info: 'Дизайнерские' },
      { info: 'Классика' },
      { info: 'Прованс' },
      { info: 'Восток' },
      { info: 'Детские' },
      { info: 'Светодиодные' },
      { info: 'Неоновые слова' },
      { info: 'Гибкие бра' },
      { info: 'Бра с абажуром' },
      { info: '1 лампочка' },
      { info: '2 лампочки' },
      { info: '3 и более лампоек' },
      { info: 'В спальню' },
    ]
  },
  {
    title: 'Ретро патроны и подвесные лампы',
    img: 'https://loft-concept.ru/upload/uf/206/zy8iu3lzyfse4241e6mlgvevdpmnkt8p/retro_patrony.png',
    menuItems: [
      { info: 'Бетон' },
      { info: 'Дерево' },
      { info: 'Металл' },
      { info: 'Пластик' },
    ]
  },
  {
    title: 'Натсольные лампы',
    img: 'https://loft-concept.ru/upload/uf/765/6mgynroonz2hwz1rrxjkj5g1lbmwfb32/table_lamp_blue.png',
    menuItems: [
      { info: 'Лофт' },
      { info: 'Дизайнерские' },
      { info: 'Прованс' },
      { info: 'Детские' },
      { info: 'Для рабочего стола' },
      { info: 'С абажуром' },
    ]
  },
  {
    title: 'Торшеры',
    img: 'https://loft-concept.ru/upload/uf/970/kxd283l010qpxdnuus9hglodl0u2p6fh/torshery.png',
    menuItems: [
      { info: 'Лофт' },
      { info: 'Дизайнерские' },
      { info: 'Прованс' },
      { info: 'С абажуром' },
      { info: 'Изогнутые' },
      { info: '1 лампочка' },
      { info: '2 и более ламп' },
    ]
  },
  {
    title: 'Подсветка для картин',
    img: 'https://loft-concept.ru/upload/uf/a7d/rpa6d7gjqw3xq62h8hgqqutle5g0lmi7/podsvetka_dlya_kartin.png',
    menuItems: [
      { info: 'Современная' },
      { info: 'Класическая' },
    ]
  },
  {
    title: 'Споты потолочные',
    img: 'https://loft-concept.ru/upload/uf/45b/bty7tm771vc3pnk7hhy9tjxv7bml5roh/spots.png',
    menuItems: [
      { info: 'Встраиваемые' },
      { info: 'Накладные' },
      { info: 'Поворотные' },
      { info: '1 лампочка' },
      { info: '2 и более лампочек' },
      { info: 'Точечные светильники' },
      { info: 'Трековые споты' },
    ]
  },
  {
    title: 'Трековые системы',
    img: 'https://loft-concept.ru/upload/uf/791/k83coatv1a6rvb3yjkcc9okjpcl5aotv/trekovye_sistemy.png',
    menuItems: [
    ]
  },
  {
    title: 'Светодиодная подсветка',
    img: 'https://loft-concept.ru/upload/uf/0e5/kx0gns663zj0sk332pr72hy976pn4u40/svetodiody.png',
    menuItems: [
      { info: 'Светодиодные ленты' },
      { info: 'Блоки питания' },
      { info: 'Профиль для лент' },
      { info: 'Рассеиватели' },
      { info: 'Светодиодные' },
      { info: 'Камины' },
    ]
  },
  {
    title: 'Уличный свет',
    img: 'https://loft-concept.ru/upload/uf/8ed/zpycudzr35diaiqb6q2m7n38gjgqyn7e/ulichniy_svet.png',
    menuItems: [
      { info: 'Подвесные' },
      { info: 'Настенные' },
      { info: 'Парковые торшеры' },
      { info: 'Ландшафтные свет' },
    ]
  },
  {
    title: 'Лампочки',
    img: 'https://loft-concept.ru/upload/uf/63c/r0wg5h114s8zhns8ykkeswvllzy5yi8d/lampochki.png',
    menuItems: [
      { info: 'E14' },
      { info: 'E27' },
      { info: 'G9' },
      { info: 'G4' },
      { info: 'G4' },
      { info: 'Дизайнерские формы' },
      { info: 'Большие лампочки' },
    ]
  },
  {
    title: 'Аксессуары и комплектующие',
    img: 'https://loft-concept.ru/upload/uf/102/kb808ppvkrughw8a9gnu8mk4slz8hkez/aksessuary.png',
    menuItems: [
      { info: 'Основания для светильников' },
    ]
  },
]

export const MenuCategoryChand = ({ setModal }) => {

  const onClickListItem = (i) => {
    setModal(false)   //Выбери какой-нибудь пункт и далее скройся
  }
  return (
    <ul className={s.menu_category__list}>
      {
        data.map(({ title, img, menuItems }, i) => (
          <li key={i} className={s.menu_category__list_item}>
            < Link
              onClick={onClickListItem}
              rel="nofollow"
              className={s.menu_category__list_link}
              to="/chapter" >
              <span className={s.menu_category__link_preview}>
                < img
                  alt={title}
                  className={s.menu_category__link_image}
                  height="40"
                  loading="lazy"
                  src={img}
                  width="67"
                />
              </span>
              <span className={s.menu_category__link_text}>{title}</span>
            </Link >
            {
              menuItems.map((obj, i) => (
                <ul key={i} className={s.menu_category__list1}>
                  <li className={s.menu_category__list_item}>
                    <Link
                      onClick={onClickListItem}
                      key={i} rel="nofollow" className={s.menu_category__list_links} to="/chapter">
                      {obj.info}
                    </Link>
                  </li>
                </ul>))
            }
          </li >))
      }
    </ul >

  )
}

export default MenuCategoryChand;