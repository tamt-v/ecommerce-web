const products = [
  {
    type: "shoes",
    data: [
      {
        id: 1,
        name: "Giày Cầu Lông Lining AYAT003-3 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayat003-3-chinh-hang.webp",
        price: 150,
      },
      {
        id: 2,
        name: "Giày Cầu Lông Lining AYAT003-1 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayat003-1-chinh-hang..webp",
        price: 150,
      },
      {
        id: 3,
        name: "Giày Cầu Lông Lining AYTS016-6 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayts016-6-chinh-hang-1.webp",
        price: 60,
      },
      {
        id: 4,
        name: "Giày Cầu Lông Lining AYTS016-7 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-Lining-AYTS020-7-chinh-hang.webp",
        price: 66,
      },
      {
        id: 5,
        name: "Giày Cầu Lông Lining AYTT003 - Trắng Đen (Nội Địa Trung)",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-aytt003-trang-den-noi-dia-trung-2.webp",
        price: 60,
      },
      {
        id: 6,
        name: "Giày Cầu Lông Lining AYAT005-1 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayat005-1-chinh-hang.webp",
        price: 110,
      },
      {
        id: 7,
        name: "Giày Cầu Lông Lining AYTT001-4 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-aytt001-4-chinh-hang-1.webp",
        price: 60,
      },
      {
        id: 8,
        name: "Giày Cầu Lông Lining AYAS012 JF-01 Pro Đen (Nội Địa Trung)",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayas012-jf-01-pro-den-noi-dia-trung-4.webp",
        price: 140,
      },
      {
        id: 9,
        name: "Giày Cầu Lông Lining AYTS024-3 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lining-ayts024-3-chinh-hang-5.webp",
        price: 60,
      },
      {
        id: 10,
        name: "Giày Cầu Lông Lining AYAS032-3 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lining-ayas032-3-chinh-hang-2.webp",
        price: 170,
      },
    ],
  },

  {
    type: "rackets",
    data: [
      {
        id: 1,
        name: "Vợt Cầu Lông Yonex Nanoflare 300 - Xanh Ngọc (Mã JP)",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-300-xanh-ngoc-ma-jp.webp",
        price: 120,
      },
      {
        id: 2,
        name: "Vợt Cầu Lông Yonex Nanoflare 300 - Đỏ (Mã JP)",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-300-do-ma-jp.webp",
        price: 170,
      },
      {
        id: 3,
        name: "Vợt Cầu Lông Yonex Nanoflare 1000Z (Mã JP)",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-1000z-ma-jp.webp",
        price: 170,
      },
      {
        id: 4,
        name: "Vợt Cầu Lông Yonex Astrox 70 (Sa) Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-astrox-70-sa-chinh-hang.webp",
        price: 170,
      },
      {
        id: 5,
        name: "Vợt Cầu Lông Yonex Nanoflare 70 (RP) Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-70-rp-chinh-hang.webp",
        price: 170,
      },
      {
        id: 6,
        name: "Vợt Cầu Lông Yonex Nanoflare 001C New 2023 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-001c-new-2023-chinh-hang-1.webp",
        price: 170,
      },
      {
        id: 7,
        name: "Vợt Cầu Lông Yonex Nanoflare 001A New 2023 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-001a-new-2023-chinh-hang-1.webp",
        price: 170,
      },
      {
        id: 8,
        name: "Vợt Cầu Lông Yonex Astrox 69 Xanh Navy Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-astrox-69-xanh-navy-chinh-hang-khong-bao-hanh-1.webp",
        price: 170,
      },
      {
        id: 9,
        name: "Vợt Cầu Lông Yonex Duora 55 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-duora-55-chinh-hang-khong-bao-hanh-1.webp",
        price: 170,
      },
      {
        id: 10,
        name: "Vợt Cầu Lông Yonex Nanoflare Feel (NOR) Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-feel-nor-chinh-hang-1.webp",
        price: 170,
      },
    ],
  },
  {
    type: "shirt",
    data: [
      {
        id: 1,
        name: "Áo Cầu Lông Yonex 6509 Nam - Xanh",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-6509-nam-xanh-1.webp",
        price: 6,
      },
      {
        id: 2,
        name: "Áo Cầu Lông Yonex 6295 Nam - Trắng Đỏ",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-6295-nam-trang-do.webp",
        price: 6,
      },
      {
        id: 3,
        name: "Áo Cầu Lông Yonex 6502 Nam - Trắng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-6502-nam-trang.webp",
        price: 6,
      },
      {
        id: 4,
        name: "Áo Cầu Lông Yonex 2086 Nam - Đen Vàng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-2086-nam-den-vang.webp",
        price: 8,
      },
      {
        id: 5,
        name: "Áo Cầu Lông Yonex 2086 Nam - Trắng Đỏ",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-2086-nam-trang-do.webp",
        price: 6,
      },
      {
        id: 6,
        name: "Áo Cầu Lông Yonex 2083 Nam - Xanh",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-2083-nam-xanh.webp",
        price: 6,
      },
      {
        id: 7,
        name: "Áo Cầu Lông Yonex 6296 Nữ - Trắng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-6296-nu-trang.webp",
        price: 6,
      },
      {
        id: 8,
        name: "Áo Cầu Lông Yonex 2085 Nam - Đen",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-2085-nam-den-.webp",
        price: 6,
      },
      {
        id: 9,
        name: "Áo Cầu Lông Yonex 6296 Nam - Trắng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-6296-nam-trang.webp",
        price: 6,
      },
      {
        id: 10,
        name: "Áo Cầu Lông Yonex 6511 Nam - Trắng Hồng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-6511-nam-trang-hong.webp",
        price: 6,
      },
    ],
  },

  {
    type: "pants",
    data: [
      {
        id: 1,
        name: "Quần Cầu Lông Yonex Q16 Nam - Đen Trắng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-q16-nam-den-trang_1.webp",
        price: 5,
      },
      {
        id: 2,
        name: "Quần Cầu Lông Yonex Nữ Đen - Mã 356",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-nu-den-ma-356-1.webp",
        price: 5,
      },
      {
        id: 3,
        name: "Quần Cầu Lông Yonex Nữ Trắng - Mã 410",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-nu-trang-ma-410-1.webp",
        price: 5,
      },
      {
        id: 4,
        name: "Quần Cầu Lông Yonex 941 - Đen",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-941-den.webp",
        price: 5,
      },
      {
        id: 5,
        name: "Quần Cầu Lông Yonex 945 - Trắng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-945-trang.webp",
        price: 5,
      },
      {
        id: 6,
        name: "Quần Cầu Lông Yonex 92011 - Xanh Ngọc",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-92011-xanh-ngoc-1_1.webp",
        price: 5,
      },
      {
        id: 7,
        name: "Quần Cầu Lông Yonex 92005 - Đen",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-92005-den-1.webp",
        price: 5,
      },
      {
        id: 8,
        name: "Quần Cầu Lông Yonex 92007 - Hồng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-92007-hong.webp",
        price: 5,
      },
      {
        id: 9,
        name: "Quần Cầu Lông Yonex 92026 - Xanh",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-92026-xanh-2.webp",
        price: 5,
      },
      {
        id: 10,
        name: "Quần Cầu Lông Yonex 92026 - Trắng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-92026-trang.webp",
        price: 5,
      },
    ],
  },
  {
    type: "new-products",
    data: [
      {
        id: 1,
        name: "Giày Cầu Lông Lining AYAT003-3 Chính Hãng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayat003-3-chinh-hang.webp",
        price: 150,
      },
      {
        id: 2,
        name: "Vợt Cầu Lông Yonex Nanoflare 300 - Xanh Ngọc (Mã JP)",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-300-xanh-ngoc-ma-jp.webp",
        price: 120,
      },
      {
        id: 3,
        name: "Áo Cầu Lông Yonex 6509 Nam - Xanh",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-6509-nam-xanh-1.webp",
        price: 6,
      },
      {
        id: 4,
        name: "Quần Cầu Lông Yonex Q16 Nam - Đen Trắng",
        description:
          "Thiết kế ấn tượng đúng như tên gọi với những đường vạch như móng vuốt cào trên thân giày cùng với đó là tông màu đỏ đen ấn tượng.",
        image:
          "https://shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-q16-nam-den-trang_1.webp",
        price: 5,
      },
    ],
  },
];

export default products;
