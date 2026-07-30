// FilterPills —— 胶囊式分类/标签筛选组件
import './FilterPills.css';

interface FilterItem {
  label: string;
  count: number;
  href: string;
}

interface FilterPillsProps {
  title: string;
  items: FilterItem[];
  baseHref?: string;
  className?: string;
}

const FilterPills = ({
  title,
  items,
  baseHref = '/posts',
  className = ''
}: FilterPillsProps) => {
  return (
    <div className={`filter-pills-container ${className}`}>
      {title && <p className="filter-pills-title">{title}</p>}
      <div className="filter-pills-list">
        <a
          href={baseHref}
          className="filter-pill filter-pill--all"
          data-count={items.reduce((sum, i) => sum + i.count, 0)}
        >
          全部
          <span className="filter-pill-count">
            {items.reduce((sum, i) => sum + i.count, 0)}
          </span>
        </a>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="filter-pill"
            title={`${item.count} 篇文章`}
          >
            {item.label}
            <span className="filter-pill-count">{item.count}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FilterPills;
