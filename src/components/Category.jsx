// Category.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './Category.module.css';

const data = [
  {
    title: "Fabrics",
    content: "Material used to make clothing, available in various texture.",
    img: <img src="fabric-1.png" alt="fabric image" draggable="false" />,
  },
  {
    title: "Embellishments",
    content: "Decorative items added to garments, like beads, sequins, or embroidery.",
    img: <img src="fabric-2.png" alt="lining image" draggable="false" />,
  },
  {
    title: "Linings",
    content: "Inner layer of a fabric done into garments for a neat finish.",
    img: <img src="fabric-3.png" alt="fabric image" draggable="false" />,
  },
  {
    title: "Sewing Tools / Equipment",
    content: "Instruments used in sewing such as needles, and sewing machine.",
    img: <img src="fabric-4.png" alt="fabric image" draggable="false" />,
  },
  {
    title: "Fusibles",
    content: "Adhesive materials used to bond fabrics together with heat.",
    img: <img src="fabric-5.png" alt="fabric image" draggable="false" />,
  },
  {
    title: "Sewing Accessories",
    content: "Items that aid in sewing including pins, measuring tapes, and thimbles.",
    img: <img src="fabric-6.png" alt="fabric image" draggable="false" />,
  },
  {
    title: "Fashion Apparels and Accessories",
    content: "Clothing items and complementary pieces like hats, belts, and jewelry.",
    img: <img src="fabric-7.png" alt="fabric image" draggable="false" />,
  },
];

const Category = () => {
  const [items, setItems] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [speed, setSpeed] = useState(50);
  const carouselRef = useRef(null);
  const speedTransitionRef = useRef(null);
  
  useEffect(() => {
    setItems([...data, ...data, ...data]);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrame;

    const updateAnimation = () => {
      if (carousel) {
        const carouselWidth = carousel.offsetWidth;
        const trackWidth = carousel.firstChild.offsetWidth;
        const singleSetWidth = trackWidth / 3;

        const minSets = Math.ceil(carouselWidth / singleSetWidth) + 1;
        const currentSets = items.length / data.length;
        
        if (currentSets < minSets) {
          setItems(prevItems => [...prevItems, ...data]);
          return;
        }

        const baseSpeed = 30;
        const animationDuration = singleSetWidth / baseSpeed;
        
        carousel.style.setProperty('--scroll-width', `-${singleSetWidth}px`);
        carousel.style.setProperty('--animation-duration', `${animationDuration}s`);
      }
    };

    const handleResize = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateAnimation);
    };

    updateAnimation();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, [items]);

  const transitionSpeed = (targetSpeed) => {
    if (speedTransitionRef.current) {
      cancelAnimationFrame(speedTransitionRef.current);
    }

    const animate = () => {
      setSpeed(currentSpeed => {
        const diff = targetSpeed - currentSpeed;
        const change = diff * 0.02;

        if (Math.abs(diff) < 0.1) {
          return targetSpeed;
        }

        const newSpeed = currentSpeed + change;
        speedTransitionRef.current = requestAnimationFrame(animate);
        return newSpeed;
      });
    };

    speedTransitionRef.current = requestAnimationFrame(animate);
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    if (e.type === 'mousedown') {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
    } else if (e.type === 'touchstart') {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    }
    setScrollLeft(carouselRef.current.scrollLeft);
    
    const carousel = carouselRef.current;
    const computedStyle = window.getComputedStyle(carousel.firstChild);
    const matrix = new DOMMatrixReadOnly(computedStyle.transform);
    carousel.firstChild.style.transform = `translateX(${matrix.m41}px)`;
    carousel.firstChild.style.animation = 'none';
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    let x;
    if (e.type === 'mousemove') {
      x = e.pageX - carouselRef.current.offsetLeft;
    } else if (e.type === 'touchmove') {
      x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    }
    
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const carousel = carouselRef.current;
    carousel.firstChild.style.animation = '';
  };

  const handleMouseLeave = () => {
    handleDragEnd();
    transitionSpeed(80);
  };

  const handleScrollLoop = () => {
    const carousel = carouselRef.current;
    const scrollWidth = carousel.scrollWidth / 3;
    const scrollPos = carousel.scrollLeft;

    if (scrollPos >= scrollWidth * 2) {
      carousel.scrollLeft = scrollPos - scrollWidth;
    } else if (scrollPos <= 0) {
      carousel.scrollLeft = scrollPos + scrollWidth;
    }
  };

  return (
    <section className={styles.category}>
      <div className={styles.category__text}>
        <h3>Categories</h3>
        <h2>Our top value categories for you</h2>
      </div>

      <div
        className={styles.carouselContainer}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseEnter={() => transitionSpeed(100)}
        ref={carouselRef}
        onScroll={handleScrollLoop}
      >
        <div className={styles.carouselTrack}>
          {items.map((item, index) => (
            <div className={styles.carouselCard} key={`${item.title}-${index}`}>
              <div className={styles.carouselImg}>{item.img}</div>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;