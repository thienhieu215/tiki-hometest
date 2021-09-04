export interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export interface Banner {
  id: number,
  title: string,
  content: string,
  url: string,
  image_url: string,
  thumbnail_url: string,
  mobile_url: string,
  border: boolean
}

export interface Product {
  id: number,
  sku: string,
  name: string,
  url_key: string,
  url_path: string,
  type: string,
  author_name: string,
  book_cover: {
    id: number,
    value: string
  },
  brand_name: string,
  short_description: string,
  price: number,
  list_price: number,
  badges: Array<{
    code: string,
    text: string
  }>,
  badges_new: Array<{
    code: string,
    icon: string,
    icon_height: number,
    icon_width: number,
    placement: string,
    text: string,
    text_color: string,
    type: string
  }>,
  discount: number,
  discount_rate: number,
  rating_average: number,
  review_count: number,
  order_count: number,
  favourite_count: number,
  thumbnail_url: string,
  thumbnail_width: number,
  thumbnail_height: number,
  freegift_items: Array<any>,
  has_ebook: boolean,
  inventory_status: string,
  is_visible: boolean,
  productset_id: number,
  productset_group_name: string,
  seller: null,
  is_flower: boolean,
  is_gift_card: boolean,
  inventory: {
    fulfillment_type: string
  },
  url_attendant_input_form: string,
  option_color: Array<any>,
  stock_item: {
    max_sale_qty: number,
    min_sale_qty: number,
    preorder_date: boolean,
    qty: number
  },
  salable_type: string,
  seller_product_id: number,
  installment_info: null,
  url_review: string,
  bundle_deal: boolean,
  all_time_quantity_sold: string,
  quantity_sold: {
    text: string,
    value: number
  },
  video_url: string,
  advertisement: null,
  tiki_live: null
}

export interface CartItem extends Product {
  quantity: number
}
