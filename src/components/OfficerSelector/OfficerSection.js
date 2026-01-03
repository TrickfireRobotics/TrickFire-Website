import './OfficerSection.scss'
import { Officer } from '../Officer/Officer';
import { useState } from 'react'
import { GradientLine } from '../GradientLine/GradientLine';
import { urlFor } from '../../assets/SanityClient';

/**
 * @component
 * 
 * Renders the complete officer section with tabbed navigation and officer grid.
 * 
 * This component displays officers organized by type (Officers, Discipline Leads, Team Leads, Mission Directors).
 * It includes desktop tab navigation and a mobile dropdown selector.
 * 
 * @param {Array<Object>} allOfficers - Array of officer objects from Sanity
 * @param {string} allOfficers[].name - The officer's name
 * @param {string} props.allOfficers[].position - The officer's position/title
 * @param {Object} props.allOfficers[].image - The officer's image object (Sanity image)
 * @param {('officer'|'discipline'|'team'|'mission')} props.allOfficers[].type - Officer category for filtering
 * @returns {JSX.Element}
 * 
 * @example
 * // Usage with officers data from Sanity
 * <OfficerSection allOfficers={officers} />
 */
export const OfficerSection = ({allOfficers}) => {
    const [activeTab, setActiveTab] = useState('officer');
    const [isDropDownactive, setIsDropdownActive] = useState(false);

    const tabs = [
        { key: 'officer', label: 'OFFICERS' },
        { key: 'discipline', label: 'DISCIPLINE LEADS' },
        { key: 'team', label: 'TEAM LEADS' },
        { key: 'mission', label: 'MISSION DIRECTORS' },
    ];

    // Filter officers by the current tab
    const displayedOfficers = allOfficers.filter(
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
            <div className='officer-grid' key={activeTab}>
                {displayedOfficers.map((officer, i) => (
                    <Officer
                        key={i}
                        image={urlFor(officer.image).auto('format').url()}
                        name={officer.name}
                        position={officer.position}
                    />
                ))}
            </div>
        </div >
    );
};
