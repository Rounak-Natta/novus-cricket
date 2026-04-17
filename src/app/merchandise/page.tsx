"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, 
  Star, 
  Award,
  ChevronRight,
  X,
  Plus,
  Shield,
  Clock,
  Gem,
  Globe,
  Quote
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  badge: string;
  image: string;
  hoverImage: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Thunder Strike Bat",
    price: 299.99,
    rating: 4.9,
    reviews: 1247,
    badge: "Bestseller",
    image: "/merch/1.png",
    hoverImage: "/merch/1.png",
  },
  {
    id: 2,
    name: "Elite Pro Helmet",
    price: 149.99,
    rating: 4.8,
    reviews: 892,
    badge: "Limited",
    image: "/merch/2.png",
    hoverImage: "/merch/2.png",
  },
  {
    id: 3,
    name: "Speedster Gloves",
    price: 79.99,
    rating: 4.7,
    reviews: 2341,
    badge: "Trending",
    image: "/merch/3.png",
    hoverImage: "/merch/3.png",
  },
  {
    id: 4,
    name: "Tour Edition Jersey",
    price: 89.99,
    rating: 4.9,
    reviews: 3456,
    badge: "New",
    image: "/merch/4.png",
    hoverImage: "/merch/4.png",
  },
];

const cricketStats = [
  { value: "24/7", label: "Concierge Support" },
  { value: "50K+", label: "Elite Members" },
  { value: "4.9★", label: "Global Acclaim" },
  { value: "24h", label: "Express Delivery" },
];

const testimonials = [
  {
    quote: "The most responsive bat I've ever wielded. Precision engineering at its finest.",
    author: "R. Sharma",
    role: "International Captain",
    rating: 5
  },
  {
    quote: "Strike Zone's gear elevated my game. The attention to detail is unmatched.",
    author: "K. Williams",
    role: "World Cup Winner",
    rating: 5
  },
  {
    quote: "From the grip to the balance—every element speaks of mastery.",
    author: "A. Khan",
    role: "All-Round Legend",
    rating: 5
  }
];

const features = [
  {
    icon: Shield,
    title: "Pro-Grade Materials",
    description: "Hand-selected English willow & aerospace composites"
  },
  {
    icon: Gem,
    title: "Mastercraftsmanship",
    description: "30+ years of artisanal bat-making heritage"
  },
  {
    icon: Clock,
    title: "Lifetime Warranty",
    description: "Confidence in every stitch and splice"
  },
  {
    icon: Globe,
    title: "Global Concierge",
    description: "White-glove delivery to 45+ countries"
  }
];

export default function CricketMerchPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setSelectedProduct(product);
    setTimeout(() => setSelectedProduct(null), 2000);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="premium-store min-h-screen" style={{ background: "var(--bg)" }}>
      <style jsx global>{`
        .premium-store {
          --bg: #FBFBF9;
          --surface: #FFFFFF;
          --fg: #1C1C1A;
          --text-dim: #6F6F6A;
          --border: #E8E6E1;
          --brand: #B8945A;
          --brand-dark: #9B7B3C;
          --muted: #F4F3F0;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap');
        
        .premium-store {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .premium-store * {
          border-color: var(--border);
        }
        
        .premium-store .product-card {
          transition: all 0.4s cubic-bezier(0.2, 0, 0, 1);
        }
        
        .premium-store .product-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.08);
        }
        
        .premium-store .stat-item {
          transition: opacity 0.2s ease;
        }
        
        .premium-store .stat-item:hover {
          opacity: 0.8;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBF9] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: "var(--muted)", border: "1px solid var(--border)" }}
          >
            <span className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--brand)" }}>The Art of Cricket</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-[1.1]"
          >
            <span style={{ color: "var(--fg)" }}>Engineered for</span>
            <br />
            <span style={{ color: "var(--brand)" }}>Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            style={{ color: "var(--text-dim)" }}
          >
            Discover precision-crafted cricket equipment trusted by champions. 
            Each piece represents the pinnacle of performance and elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button 
              className="px-8 py-3 rounded-sm text-sm font-medium tracking-wide transition-all hover:bg-opacity-90"
              style={{ background: "var(--brand)", color: "white" }}
            >
              Explore Collection
            </button>
            <button 
              className="px-8 py-3 rounded-sm text-sm font-medium tracking-wide transition-all hover:bg-black/5"
              style={{ background: "transparent", border: "1px solid var(--border)", color: "var(--fg)" }}
            >
              View Lookbook
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cricketStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="stat-item text-center"
              >
                <div className="text-3xl md:text-4xl font-light mb-2 tracking-tight" style={{ color: "var(--brand)" }}>
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em]" style={{ color: "var(--text-dim)" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4" style={{ color: "var(--fg)" }}>
              Signature Collection
            </h2>
            <div className="w-12 h-px mx-auto" style={{ background: "var(--brand)" }} />
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--text-dim)" }}>Curated for the discerning player</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-20px" }}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
                className="product-card group rounded-sm overflow-hidden"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <div 
                      className="px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider"
                      style={{ background: "var(--brand)", color: "white" }}
                    >
                      {product.badge}
                    </div>
                  </div>

                  <div className="relative overflow-hidden aspect-square bg-[#F5F4F0]">
                    <img
                      src={hoveredProductId === product.id ? product.hoverImage : product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-sm font-medium tracking-wide mb-2" style={{ color: "var(--fg)" }}>{product.name}</h3>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={12} style={{ fill: "var(--brand)", color: "var(--brand)" }} />
                      <span className="text-xs font-medium" style={{ color: "var(--fg)" }}>{product.rating}</span>
                    </div>
                    <span className="w-px h-3" style={{ background: "var(--border)" }} />
                    <span className="text-[10px] uppercase tracking-wide" style={{ color: "var(--text-dim)" }}>{product.reviews.toLocaleString()} reviews</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-base font-medium" style={{ color: "var(--fg)" }}>${product.price}</span>
                      {product.price > 100 && (
                        <span className="ml-2 text-[10px] line-through opacity-50" style={{ color: "var(--text-dim)" }}>${(product.price * 1.2).toFixed(2)}</span>
                      )}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => addToCart(product)}
                      className="px-3 py-1.5 rounded-sm text-[11px] font-medium tracking-wide transition-all hover:bg-black/5 flex items-center gap-1"
                      style={{ background: "var(--muted)", color: "var(--fg)" }}
                    >
                      <Plus size={12} />
                      Add
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Story Section */}
      <section className="py-24 border-t border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[4/3] bg-[#E8E6E1] rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#D4CFC5] to-[#B8B2A6] flex items-center justify-center">
                  <span className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--text-dim)" }}>Master at work</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: "var(--brand)" }}>Heritage</div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6" style={{ color: "var(--fg)" }}>
                The Craftsmanship Behind Each Stroke
              </h2>
              <p className="text-sm leading-relaxed mb-6 font-light" style={{ color: "var(--text-dim)" }}>
                For three generations, our master bat-makers have perfected the art of selecting, pressing, and shaping the finest English willow. Every Strike Zone bat undergoes a 72-hour handcrafting process—from cleft selection to final oil finish.
              </p>
              <p className="text-sm leading-relaxed font-light" style={{ color: "var(--text-dim)" }}>
                We believe that true performance emerges from patience, precision, and an intimate understanding of the game's soul.
              </p>
              <button className="mt-8 text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-70" style={{ color: "var(--brand)" }}>
                Discover Our Atelier →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4" style={{ color: "var(--fg)" }}>
              The Strike Zone Distinction
            </h2>
            <div className="w-12 h-px mx-auto" style={{ background: "var(--brand)" }} />
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--text-dim)" }}>Uncompromising standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-sm"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full" style={{ background: "var(--muted)" }}>
                  <feature.icon size={18} style={{ color: "var(--brand)" }} />
                </div>
                <h3 className="text-sm font-medium tracking-wide mb-2" style={{ color: "var(--fg)" }}>{feature.title}</h3>
                <p className="text-xs leading-relaxed font-light" style={{ color: "var(--text-dim)" }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 border-t border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4" style={{ color: "var(--fg)" }}>
              Voices from the Crease
            </h2>
            <div className="w-12 h-px mx-auto" style={{ background: "var(--brand)" }} />
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--text-dim)" }}>Trusted by the world's best</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-sm"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <Quote size={24} className="mb-4 opacity-30" style={{ color: "var(--brand)" }} />
                <p className="text-sm leading-relaxed mb-4 font-light italic" style={{ color: "var(--fg)" }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium tracking-wide" style={{ color: "var(--fg)" }}>{testimonial.author}</div>
                    <div className="text-[10px] uppercase tracking-wide" style={{ color: "var(--text-dim)" }}>{testimonial.role}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={10} style={{ fill: "var(--brand)", color: "var(--brand)" }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Award size={28} className="mx-auto mb-6 opacity-60" style={{ color: "var(--brand)" }} />
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4" style={{ color: "var(--fg)" }}>
              The Inner Circle
            </h2>
            <p className="text-sm max-w-md mx-auto mb-8 leading-relaxed font-light" style={{ color: "var(--text-dim)" }}>
              Join our private membership for exclusive releases, professional insights, and a complimentary gift on your first order.
            </p>
            <button 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium tracking-wide transition-all hover:bg-opacity-90"
              style={{ background: "var(--brand)", color: "white" }}
            >
              <span>Become a Member</span>
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Floating Cart Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg backdrop-blur-md"
        style={{ background: "var(--fg)", color: "white" }}
      >
        <ShoppingBag size={20} />
        {cartItemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 text-[10px] font-medium rounded-full flex items-center justify-center"
            style={{ background: "var(--brand)", color: "white" }}>
            {cartItemCount}
          </span>
        )}
      </motion.button>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md z-50 flex flex-col shadow-2xl"
              style={{ background: "var(--surface)" }}
            >
              <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} style={{ color: "var(--fg)" }} />
                  <h2 className="text-sm font-medium tracking-wide" style={{ color: "var(--fg)" }}>Shopping Bag</h2>
                  <span className="text-[10px]" style={{ color: "var(--text-dim)" }}>({cartItemCount})</span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)} 
                  className="p-1 rounded-full transition-colors hover:bg-black/5"
                >
                  <X size={16} style={{ color: "var(--text-dim)" }} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-16">
                    <ShoppingBag size={36} className="mx-auto mb-4 opacity-30" style={{ color: "var(--text-dim)" }} />
                    <p className="text-[11px] uppercase tracking-wide" style={{ color: "var(--text-dim)" }}>Your bag is empty</p>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {cart.map((item) => (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4"
                      >
                        <div className="w-16 h-16 rounded-sm overflow-hidden bg-[#F5F4F0]">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="text-xs font-medium tracking-wide" style={{ color: "var(--fg)" }}>{item.name}</h4>
                            <button onClick={() => removeFromCart(item.id)} className="opacity-40 hover:opacity-100 transition-opacity">
                              <X size={12} style={{ color: "var(--text-dim)" }} />
                            </button>
                          </div>
                          <p className="text-xs font-medium mt-1" style={{ color: "var(--brand)" }}>${item.price}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-5 h-5 rounded-sm border flex items-center justify-center text-xs"
                              style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
                            >
                              -
                            </button>
                            <span className="text-xs" style={{ color: "var(--fg)" }}>{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-5 h-5 rounded-sm border flex items-center justify-center text-xs"
                              style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t" style={{ borderColor: "var(--border)" }}>
                  <div className="flex justify-between mb-4 text-xs">
                    <span style={{ color: "var(--text-dim)" }}>Subtotal</span>
                    <span className="font-medium" style={{ color: "var(--fg)" }}>${cartTotal.toFixed(2)}</span>
                  </div>
                  <button 
                    className="w-full py-3 rounded-sm text-xs font-medium tracking-wide transition-all hover:bg-opacity-90"
                    style={{ background: "var(--brand)", color: "white" }}
                  >
                    Proceed to Checkout
                  </button>
                  <p className="text-[9px] uppercase tracking-wider text-center mt-3 opacity-40" style={{ color: "var(--text-dim)" }}>
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-sm shadow-md text-[11px] font-medium tracking-wide"
            style={{ background: "var(--fg)", color: "white" }}
          >
            Added {selectedProduct.name} to your bag
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t py-12 mt-12" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-6 text-[10px] uppercase tracking-[0.15em]">
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: "var(--text-dim)" }}>About</a>
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: "var(--text-dim)" }}>Sustainability</a>
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: "var(--text-dim)" }}>Concierge</a>
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: "var(--text-dim)" }}>Press</a>
          </div>
          <p className="text-[9px] uppercase tracking-[0.2em] opacity-40" style={{ color: "var(--text-dim)" }}>
            © 2024 STRIKE ZONE — Masters of Cricket Craftsmanship
          </p>
        </div>
      </footer>
    </div>
  );
}