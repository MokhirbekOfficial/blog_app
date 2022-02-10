CREATE TABLE blog_admin (
    admin_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    admin_name varchar(255) NOT NULL UNIQUE,
    admin_password varchar(255) NOT NULL,
    is_super boolean DEFAULT false
);

INSERT INTO blog_admin(admin_name, admin_password) VALUES('admin1', 'admin@1');
INSERT INTO blog_admin(admin_name, admin_password, is_super) VALUES('superadmin', 'superadmin@123', true);

CREATE TABLE categories (
    category_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    category_name varchar(255) NOT NULL UNIQUE,
    categoty_time timestamptz DEFAULT CURRENT_TIMESTAMP,
    category_owner uuid NOT NULL,
    FOREIGN KEY (category_owner)
        REFERENCES blog_admin(admin_id)
        ON DELETE CASCADE
);

INSERT INTO categories(category_name, category_owner) VALUES('Xorij xabarlari', 'ae7abc8b-6276-4af3-ad22-f7943963754a');

CREATE TABLE posts (
    post_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    post_title varchar(255) NOT NULL,
    post_content text NOT NULL,
    post_img text,
    post_time timestamptz DEFAULT CURRENT_TIMESTAMP,
    post_owner uuid NOT NULL,
    post_category uuid NOT NULL,
    FOREIGN KEY (post_owner)
        REFERENCES blog_admin(admin_id)
        ON DELETE CASCADE,
    FOREIGN KEY (post_category)
        REFERENCES categories(category_id)
        ON DELETE CASCADE
);

INSERT INTO posts(post_title,post_content,post_img,post_owner,post_category) VALUES('Obu-havo', 'Harorat keskin ortishi kutilmoqda','https://obhavo.uz/images/preview-logo-uz.png','ae7abc8b-6276-4af3-ad22-f7943963754a','70f9c4f7-0482-4064-8f41-1e24cf06064b');

CREATE TABLE users (
    user_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    user_name varchar(255) NOT NULL,
    user_tel bigint NOT NULL,
    user_category uuid NOT NULL,
    FOREIGN KEY (user_category)
        REFERENCES categories(category_id)
        ON DELETE CASCADE
);

INSERT INTO users(user_name, user_tel, user_category) VALUES('Iskandarov Mokhirbek', 998909032818, '70f9c4f7-0482-4064-8f41-1e24cf06064b');