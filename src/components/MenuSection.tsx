import { useEffect, useState } from 'react'
import { publicImg } from '../paths'
import { OptimizedImage } from './OptimizedImage'

type Tab = 'breakfast' | 'bites' | 'more'

const breakfast = [
  {
    file: 'english platter cat 1.jpg',
    cat: 'All Day Breakfast',
    name: 'English Breakfast Platter',
    desc: 'A full English experience — eggs, toast, grilled tomato and all the morning essentials done right.',
  },
  {
    file: 'pancake bowl -cat 1.jpg',
    cat: 'Sweet Breakfast',
    name: 'Pancake Bowl',
    desc: 'Fluffy stacked pancakes topped with fresh fruits, honey drizzle and whipped cream — morning bliss.',
  },
  {
    file: 'oat meal cat 1.jpg',
    cat: 'Healthy Start',
    name: 'Signature Oat Bowl',
    desc: 'Slow-cooked oats with seasonal toppings, nuts and natural sweeteners. Wholesome and beautiful.',
  },
  {
    file: 'smash avo egg cat 1.jpg',
    cat: 'Brunch Favourite',
    name: 'Smashed Avo & Egg',
    desc: 'House-made sourdough, creamy smashed avocado and a perfectly poached egg. Simple. Iconic.',
  },
  {
    file: 'sweet pancake good.jpg',
    cat: 'Sweet',
    name: 'Mini Pancake Stack',
    desc: 'Light and airy mini pancakes served with fresh berries, maple syrup and a dusting of icing sugar.',
  },
  {
    file: 'brownie image.jpg',
    cat: 'Indulgent',
    name: 'Nutella Dream Bowl',
    desc: 'Warm, indulgent Nutella bowl with crunchy granola, bananas and a swirl of hazelnut goodness.',
  },
] as const

const bites = [
  {
    file: 'green salad boal cat 1.jpg',
    cat: 'Salads & Bowls',
    name: 'Green Garden Bowl',
    desc: 'Fresh seasonal greens, house dressing, seeds and grains — a bowl full of goodness and colour.',
  },
  {
    file: 'burger kapai.jpg',
    cat: 'Burgers',
    name: 'Kapai Smash Burger',
    desc: 'Double-smashed patty, melted cheese, caramelised onions and our secret sauce. The real deal.',
  },
  {
    file: 'brownie image.jpg',
    cat: 'Dessert',
    name: 'Fudge Brownie',
    desc: 'Warm, gooey dark chocolate brownie served with a scoop of vanilla bean gelato. Pure decadence.',
  },
  {
    file: 'red pasta cat 0.jpg',
    cat: 'Pasta',
    name: 'Arrabbiata Pasta',
    desc: 'Al dente penne in a fiery tomato and garlic sauce, topped with fresh basil and parmesan shavings.',
  },
  {
    file: 'family health cat 0.jpg',
    cat: 'Sharing',
    name: 'Family Health Platter',
    desc: 'A generous sharing board of fresh, wholesome bites designed for moments worth savouring together.',
  },
] as const

const more = [
  {
    file: 'butter garlic momo cat 2.jpg',
    cat: 'Snacks',
    name: 'Butter Garlic Momos',
    desc: 'Pan-fried momos tossed in rich butter-garlic sauce — our most talked-about crowd pleaser.',
  },
  {
    file: 'maggie ramen cat 2.jpg',
    cat: 'Noodles',
    name: 'Kapai Ramen Noodles',
    desc: 'A gourmet take on your childhood favourite — elevated with rich broth, soft egg and toppings.',
  },
  {
    file: 'pancake mini cat 1.jpg',
    cat: 'Minis',
    name: 'Bite-Size Pancakes',
    desc: 'Perfect little bites of happiness — our miniature pancakes are great as a snack any time of day.',
  },
] as const

function MenuGrid({
  items: list,
}: {
  items: readonly {
    file: string
    cat: string
    name: string
    desc: string
  }[]
}) {
  return (
    <div className="menu-grid">
      {list.map((item, i) => (
        <div
          className="menu-card reveal"
          key={item.file}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <div className="menu-card-img">
            <OptimizedImage
              src={publicImg(item.file)}
              alt={item.name}
            />
          </div>
          <div className="menu-card-body">
            <div className="menu-card-cat">{item.cat}</div>
            <div className="menu-card-name">{item.name}</div>
            <div className="menu-card-desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function MenuSection() {
  const [tab, setTab] = useState<Tab>('breakfast')

  useEffect(() => {
    const q = `#panel-${tab} .reveal`
    requestAnimationFrame(() => {
      document.querySelectorAll(q).forEach((el) => {
        el.classList.remove('visible')
      })
      requestAnimationFrame(() => {
        document.querySelectorAll(q).forEach((el) => {
          el.classList.add('visible')
        })
      })
    })
  }, [tab])

  return (
    <section id="menu">
      <div className="menu-header">
        <div className="reveal-left">
          <span className="section-eyebrow">What We Serve</span>
          <h2 className="section-title">
            Our <em>Menu</em>
          </h2>
        </div>
        <div className="menu-tabs reveal-right">
          {(
            [
              ['breakfast', 'Breakfast'],
              ['bites', 'Bites & Bowls'],
              ['more', 'More'],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`menu-tab${tab === id ? ' active' : ''}`}
              data-tab={id}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`menu-panel${tab === 'breakfast' ? ' active' : ''}`}
        id="panel-breakfast"
      >
        <MenuGrid items={breakfast} />
      </div>
      <div
        className={`menu-panel${tab === 'bites' ? ' active' : ''}`}
        id="panel-bites"
      >
        <MenuGrid items={bites} />
      </div>
      <div
        className={`menu-panel${tab === 'more' ? ' active' : ''}`}
        id="panel-more"
      >
        <MenuGrid items={more} />
      </div>
    </section>
  )
}
