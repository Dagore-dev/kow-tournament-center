export default function FormButton ({ children, onClick, className }) {
  const classes = 'block bg-orange-300 sm:hover:bg-pink-300 active:bg-pink-300 text-white font-bold py-1 px-2 my-1 w-full rounded'
  return (
    <button onClick={onClick} className={(className ? `${classes} ${className}` : classes)}>
      {children}
    </button>
  )
}
