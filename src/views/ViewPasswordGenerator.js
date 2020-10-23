import React from 'react'
import copy from 'copy-to-clipboard'
import ImportSvg from '../res/ImportSvg'

import '../styles/ViewPasswordGenerator.scss'

const ViewPasswordGenerator = props => {
    let [password, setPassword] = React.useState('')
    let [passLength, setLength] = React.useState(16)
    let [isSymbols, setSymbols] = React.useState(true)
    let [isNumbers, setNumbers] = React.useState(true)
    let [isLower, setLower] = React.useState(true)
    let [isUpper, setUpper] = React.useState(true)
    let [isSimilar, setSimilar] = React.useState(false)
    let [isAmbiguous, setAmbiguous] = React.useState(false)

    const prevCount = usePrevious(password);
    React.useEffect(() => {
        prevCount === password && generatePassword(passLength)
    });

    const isRequired = () => {
        let checkedCounter = 0

        if (isSymbols) { checkedCounter += 1 }
        if (isNumbers) { checkedCounter += 1 }
        if (isLower) { checkedCounter += 1 }
        if (isUpper) { checkedCounter += 1 }
        if (isSimilar) { checkedCounter += 1 }
        if (isAmbiguous) { checkedCounter += 1 }

        return (checkedCounter === 1 ? true : false)
    }

    const generatePassword = (length) => {
        const lower = 'abcdefghjkmnpqrstuvwxyz'
        const lowerSim = 'ilo'
        const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
        const upperSim = 'IO'
        const numbers = '23456789'
        const numbersSim = '01'
        const symbols = '!#$%&*+-=?@^_'
        const ambiguous = '{}[]()\\/\'"`~,;:.<>'
        
        let generatedPassword = ''
        let characters = `${isLower ? lower : ''}${isUpper ? upper : ''}${isNumbers ? numbers : ''}${isSymbols ? symbols : ''}${isSimilar ? lowerSim+upperSim+numbersSim : ''}${isAmbiguous ? ambiguous : ''}`
        let charactersLength = characters.length
        for (let i = 0; i < length; i++) {
            generatedPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        setPassword(generatedPassword)
    }

    password.length === 0 && generatePassword(passLength)
    const RefreshSVG = ImportSvg.Refresh

    return (
        <article className={`viewPasswordGenerator view`}>
            <div className={`viewPasswordGenerator__container__password`}>
                <span className={`viewPasswordGenerator__password`}>{password}</span>
                <button className={`viewPasswordGenerator__refresh__button`} type="button" onClick={() => generatePassword(passLength)}>
                    <RefreshSVG className={`viewPasswordGenerator__refresh__svg`} />
                </button>
            </div>
            <div className={`viewPasswordGenerator__container__copy`}>
                <button className={`viewPasswordGenerator__copy__button`} type="button" onClick={() => copy(password.toString())}>Copy password</button>
            </div> 
            <div className={`viewPasswordGenerator__container__range`}>
                <p className={`viewPasswordGenerator__length`}>Length: {passLength}</p>
                <input className={`viewPasswordGenerator__range`} type="range" defaultValue="16" min="4" max="40" onChange={(e) => setLength(parseInt(e.target.value))}/>
            </div> 
            <div className={`viewPasswordGenerator__container__checkboxes`}>
                <div className={`viewPasswordGenerator__item`}>
                    <input className={`viewPasswordGenerator__checkbox`} type="checkbox" onChange={(e) => (!isRequired() || !isSymbols) && setSymbols(e.target.checked)} checked={isSymbols} />
                    <label className={`viewPasswordGenerator__label`}>Symbols ( e.g. @#$% )</label>
                </div>
                <div className={`viewPasswordGenerator__item`}>
                    <input className={`viewPasswordGenerator__checkbox`} type="checkbox" onChange={(e) => (!isRequired() || !isNumbers) && setNumbers(e.target.checked)} checked={isNumbers} />
                    <label className={`viewPasswordGenerator__label`}>Numbers ( e.g. 123456 )</label>
                </div>
                <div className={`viewPasswordGenerator__item`}>
                    <input className={`viewPasswordGenerator__checkbox`} type="checkbox" onChange={(e) => (!isRequired() || !isLower) && setLower(e.target.checked)} checked={isLower} />
                    <label className={`viewPasswordGenerator__label`}>Lowercase Characters ( e.g. abcdefgh )</label>
                </div>
                <div className={`viewPasswordGenerator__item`}>
                    <input className={`viewPasswordGenerator__checkbox`} type="checkbox" onChange={(e) => (!isRequired() || !isUpper) && setUpper(e.target.checked)} checked={isUpper} />
                    <label className={`viewPasswordGenerator__label`}>Uppercase Characters ( e.g. ABCDEFGH )</label>
                </div>
                <div className={`viewPasswordGenerator__item`}>
                    <input className={`viewPasswordGenerator__checkbox`} type="checkbox" onChange={(e) => (!isRequired() || !isSimilar) && setSimilar(e.target.checked)} checked={isSimilar} />
                    <label className={`viewPasswordGenerator__label`}>Similar Characters ( e.g. i, l, 1, L, o, 0, O )</label>
                </div>
                <div className={`viewPasswordGenerator__item`}>
                    <input className={`viewPasswordGenerator__checkbox`} type="checkbox" onChange={(e) => (!isRequired() || !isAmbiguous) && setAmbiguous(e.target.checked)} checked={isAmbiguous} />
                    <label className={`viewPasswordGenerator__label`}>Ambiguous Characters ( {`{ } [ ] ( ) / \\ ' " \` ~ , ; : . < >`} )</label>
                </div>
            </div>
        </article>
    )
}

const usePrevious = (value) => {
    const ref = React.useRef()
    
    React.useEffect(() => {
      ref.current = value
    }, [value])
    
    return ref.current
}

export default ViewPasswordGenerator