import {Component} from 'react';
type IStats={
  component: any;
}

export default function asyncComponent(importComponent:any) {
  class AsyncComponent extends Component<any, IStats>{
    constructor(props: any) {
      super(props);
      this.state={
        component:null
      }
    }
 
    async componentDidMount() {
      const {default: component} = await importComponent();
 
      this.setState({component: component})
    }
 
    render() {
      const {state,props} = this;
      const C = state.component;
 
      return   C? <C {...props}></C> : null
    }
  }
  return AsyncComponent;
}
