/* eslint-disable no-return-assign */
import React, { lazy, Suspense } from 'react';
import redux from 'REDUX';
// import { imports } from 'fmihel-lazy-load';
// import Fallback from './components/Fallback/Fallback.jsx';

class App extends React.Component {
    constructor(p) {
        super(p);
        this.onTheme = this.onTheme.bind(this);
        this.state = {
        };
    }

    onTheme() {
        redux.actions.Theme();
    }
    // componentDidMount() {
    // разовый вызов после первого рендеринга
    // }

    // componentWillUnmount() {
    // разовый после последнего рендеринга
    // }

    // componentDidUpdate(prevProps, prevState, prevContext) {
    // каждый раз после рендеринга (кроме первого раза !)
    // }

    render() {
        // const { LazyLoadA, LazyLoadB, LazyLoadD } = this.state;
        const { theme } = this.props;
        return (
            <div className={`app ${theme}`}>
                <div className='panel'>
                    <input type="button" onClick={this.onTheme} value='theme'/>
                </div>
            </div>
        );
    }
}
App.defaultProps = {
};

const mapStateToProps = (state) => ({
    theme: state.ui.theme,
});

export default redux.connect(mapStateToProps)(App);
