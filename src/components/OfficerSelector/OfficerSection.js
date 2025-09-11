import './OfficerSection.scss'
import { Officer } from '../Officer/Officer';
import { useState } from 'react'

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
    const [activeTab, setActiveTab] = useState('officers');

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
            { /* Selector Tabs */}
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
        </div>
    );
};
