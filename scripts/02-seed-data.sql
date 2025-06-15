-- Insert sample products
INSERT INTO products (name, description, price, image_url, featured) VALUES
('Argan Miracle Oil', 'Pure Moroccan argan oil for deep nourishment and shine. Rich in vitamin E and essential fatty acids.', 29.99, '/placeholder.svg?height=300&width=300', true),
('Coconut Bliss Elixir', 'Organic coconut oil blend with rosemary and lavender for healthy hair growth and scalp care.', 24.99, '/placeholder.svg?height=300&width=300', true),
('Jojoba Silk Serum', 'Lightweight jojoba oil serum that mimics natural sebum for balanced, silky hair.', 34.99, '/placeholder.svg?height=300&width=300', true),
('Castor Root Strength', 'Cold-pressed castor oil with peppermint for promoting hair thickness and strength.', 19.99, '/placeholder.svg?height=300&width=300', false),
('Rosehip Glow Treatment', 'Vitamin C rich rosehip oil for damaged hair repair and natural shine restoration.', 39.99, '/placeholder.svg?height=300&width=300', false),
('Sweet Almond Softness', 'Gentle sweet almond oil perfect for sensitive scalps and daily hair care routine.', 22.99, '/placeholder.svg?height=300&width=300', false);

-- Insert admin user profile (you'll need to sign up first, then update the role)
-- This is just a placeholder - you'll need to update with actual user ID after signup
-- UPDATE profiles SET role = 'admin' WHERE email = 'admin@blissfullocks.com';
