# Learn Axios in React

این پروژه یک نمونه ساده و آموزشی برای یادگیری نحوه استفاده از **Axios** در فریم‌ورک **React** است. هدف این پروژه، آشنایی با روش‌های ارسال و دریافت داده از API‌ها با استفاده از Axios می‌باشد.

## ویژگی‌ها (Features)
- استفاده از Axios برای درخواست‌های HTTP (`GET`, `POST`, `PUT`, `DELETE`)
- مدیریت State در React برای ذخیره و نمایش داده‌ها
- ساختار ساده و مناسب برای یادگیری
- امکان گسترش برای پروژه‌های واقعی

## پیش‌نیازها (Prerequisites)
برای اجرای این پروژه، ابتدا باید ابزارهای زیر روی سیستم شما نصب باشد:
- **Node.js** (نسخه 14 یا بالاتر)
- **npm** یا **yarn**
- آشنایی مقدماتی با **React**

## نصب و راه‌اندازی (Installation & Setup)
ابتدا مخزن پروژه را کلون کنید:
```bash
git clone https://github.com/amirhoprogrammer/learnaxios.git
```

سپس وارد پوشه پروژه شوید:
```bash
cd learnaxios
```

پکیج‌ها را نصب کنید:
```bash
npm install
```
یا با yarn:
```bash
yarn install
```

پروژه را اجرا کنید:
```bash
npm start
```
یا:
```bash
yarn start
```

## استفاده از Axios (Usage)
در این پروژه از Axios برای درخواست به API استفاده شده است. نمونه‌ای از کد موجود در پروژه:

```javascript
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

## ساختار پوشه‌ها (Project Structure)
```
learnaxios/
│── public/
│── src/
│   ├── components/
│   ├── App.js
│   ├── index.js
│── package.json
```

## لایسنس (License)
این پروژه تحت مجوز **MIT** منتشر شده است. شما می‌توانید آن را آزادانه استفاده و ویرایش کنید.
