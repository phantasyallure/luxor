// Product categories shared by the admin "add product" form and the
// storefront filter. Keep `id` stable — it is what is stored on the product
// row (products.category). Labels can be edited freely.

export const CATEGORIES = [
  { id: 'bags', label: { fr: 'Sacs', en: 'Bags', ar: 'حقائب' } },
  { id: 'wallets', label: { fr: 'Portefeuilles', en: 'Wallets', ar: 'محافظ' } },
  { id: 'belts', label: { fr: 'Ceintures', en: 'Belts', ar: 'أحزمة' } },
  { id: 'jewelry', label: { fr: 'Bijoux', en: 'Jewelry', ar: 'مجوهرات' } },
  { id: 'watches', label: { fr: 'Montres', en: 'Watches', ar: 'ساعات' } },
  { id: 'sunglasses', label: { fr: 'Lunettes de soleil', en: 'Sunglasses', ar: 'نظارات شمسية' } },
  { id: 'hats', label: { fr: 'Chapeaux et casquettes', en: 'Hats and caps', ar: 'قبعات' } },
  { id: 'scarves', label: { fr: 'Écharpes et foulards', en: 'Scarves', ar: 'أوشحة' } },
  { id: 'hair', label: { fr: 'Accessoires cheveux', en: 'Hair accessories', ar: 'إكسسوارات الشعر' } },
  { id: 'tech', label: { fr: 'Accessoires tech', en: 'Tech accessories', ar: 'إكسسوارات تقنية' } },
  { id: 'other', label: { fr: 'Autres', en: 'Other', ar: 'أخرى' } },
]

// Products saved under an old category (e.g. from an earlier catalogue)
// are shown under "Other" until they are edited.
export function normalizeCategory(id) {
  return CATEGORIES.some((c) => c.id === id) ? id : 'other'
}

export function categoryLabel(id, lang) {
  const found = CATEGORIES.find((c) => c.id === normalizeCategory(id))
  return found.label[lang] || found.label.fr
}
