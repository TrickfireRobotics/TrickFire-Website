import './OfficerSection.scss'
import { Officer } from '../Officer/Officer';
import { useState } from 'react'
import { GradientLine } from '../GradientLine/GradientLine';

/**
 * @component
 *
 * This component renders the full officer section, including the selector and grid of officers.
 *
 * @param {string} props.name - The name that will be displayed over the officer's photo.
 * @param {string} props.position - The position that officer holds within the club.
 * @param {string} props.photo - The photo that will be displayed in the main box.
 * @param {string} props.type - The type of officer this person is, and which tab they will appear under.
 * @returns {JSX.Element}
 */
export const OfficerSection = (props) => {
    const [activeTab, setActiveTab] = useState('officer');
    const [isDropDownactive, setIsDropdownActive] = useState(false);

    const tabs = [
        { key: 'officer', label: 'OFFICERS' },
        { key: 'discipline', label: 'DISCIPLINE LEADS' },
        { key: 'team', label: 'TEAM LEADS' },
        { key: 'mission', label: 'MISSION DIRECTORS' },
    ];

    // Filter officers by the current tab
    const displayedOfficers = props.allOfficers.filter(
        (officer) => officer.type === activeTab
    );

    return (
        <div className='officer-section'>
            <h1 className='title'>TrickFire is 100% Student-Led</h1>
            { /* Desktop Selector Tabs */}
            <div className='tabs'>
                {tabs.map(tab => (
                    <button
                        key={tab.key}
                        className={`tab ${activeTab === tab.key ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.key)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            { /* Mobile Dropdown */}
            <div className='mobile-tabs'>
                <button
                    className='active-tab'
                    onClick={() => setIsDropdownActive(!isDropDownactive)}
                >
                    {tabs.find(t => t.key === activeTab)?.label}
                    <span className='arrow'>{isDropDownactive ? '▲' : '▼'}</span>
                </button>
                <GradientLine className='gradient' />
                {isDropDownactive && (
                    <div className='dropdown'>
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => {
                                    setActiveTab(tab.key);
                                    setIsDropdownActive(false);
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            { /* Grid of Officer Images */}
            <div className='officer-grid'>
                {displayedOfficers.map((officer, i) => (
                    <Officer
                        key={i}
                        image={officer.image}
                        name={officer.name}
                        position={officer.position}
                    />
                ))}
            </div>
        </div >
    );
};
