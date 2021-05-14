export const Section = ({title, subtitle, className='', children}) => (
    <section className={`Section ${className}`}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        {children}
    </section>
)