import React, { useEffect, useState, useRef } from 'react' 
import { connect, useDispatch } from 'react-redux'
import { changeTabActive } from '../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomHook from './CustomHook';

function Contacts({activeTab}) {
const dispatch = useDispatch();
const [listContacts] = useState([
  {
    title: 'Phone Number',
    value: '+84123XXX'
  },{
    title: 'Email',
    value: 'hohoang.dev@gmail.com'
  },{
    title: 'Instagram',
    value: '@lundev.web'
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})

export default connect(mapStateToProps)(Contacts)
