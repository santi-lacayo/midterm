import {useState, useEffect, useRef} from 'react'

import {GoChevronDown} from 'react-icons/go'
import Panel from './Panel'

const Dropdown = (props) => {
  const {options, onChange, value} = props
  // local state
  const [isOpen, setIsOpen] = useState(false)

  const divEl = useRef()
  useEffect(() => {
    // check the element assigned to const divEl (the most parent div in our dropdown)
    // if what we just clicked is outside of this component
    // close our dropdown!
    const handler = (event) => {
      // check that divEl.current exists before AND that it does not contain the event target
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false)
        console.log('clicked outside dropdown')
      }
    }

    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [divEl])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    // need some other function defined by the
    // parent component passed in as a prop to call here
    onChange(option)
  }

  const renderedOptions = options.map((opt, index) => {
    // this is where we assign an element on the page to our divEl var!
    // WHY? because we this components state (isOpen) to change when we click
    // OUTSIDE THIS COMPONENT
    return (
      <div
        onClick={() => handleOptionClick(opt)}
        key={index}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {opt.label}
      </div>
    )
  })

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {/* if value exists (aka not null or undefined) find the value key within{{value?.value} */
        /* great use of a ternary */}
        {value ? value.label : 'Select...'} <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )
}

// default export (usually the file name should give you a hint about what to be the default export)
export default Dropdown
