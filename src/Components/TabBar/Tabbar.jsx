import React from 'react'

const Tabbar = () => {
    return (
        <div>
            <div className="radio-inputs ">
                <label className="radio ">
                    <input type="radio" name="radio" defaultChecked />
                    <span className="name">Trending</span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" />
                    <span className="name">Top</span>
                </label>
            </div>
        </div>
    )
}

export default Tabbar
