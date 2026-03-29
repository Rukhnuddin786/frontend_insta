import React, { useState } from 'react'
import './JobCareerPage.css'

const JobCareerPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const jobs = [
    {
      id: 1,
      company: 'Amazon',
      title: 'SDE 1',
      location: 'Multiple Locations',
      type: 'Full-time',
      category: 'engineering',
      logo: '📦',
      description: 'Software Development Engineer position at Amazon',
      link: 'https://www.amazon.jobs/en-gb/jobs/3171334/sde-1',
      featured: true
    },
    {
      id: 2,
      company: 'Cisco',
      title: 'Product Management Specialist - Early in Career',
      location: 'San Jose, CA',
      type: 'Full-time',
      category: 'product',
      logo: '🌐',
      description: 'Early career product management role at Cisco',
      link: 'https://careers.cisco.com/global/en/job/2010308/Product-Management-Specialist-Early-in-Career',
      featured: true
    },
    {
      id: 3,
      company: 'Capgemini',
      title: 'Students and Graduates Program',
      location: 'Global',
      type: 'Internship/Full-time',
      category: 'graduate',
      logo: '💼',
      description: 'Career opportunities for students and recent graduates',
      link: 'https://www.capgemini.com/careers/career-paths/students-and-graduates/',
      featured: false
    },
    {
      id: 4,
      company: 'HCLTech',
      title: 'Analyst (Non-Voice)',
      location: 'Multiple Locations',
      type: 'Full-time',
      category: 'analyst',
      logo: '🔧',
      description: 'Non-voice analyst position at HCL Technologies',
      link: 'https://careers.hcltech.com/job/Analyst-%28Non-Voice%29/25114-en_US',
      featured: false
    }
  ]

  const categories = [
    { value: 'all', label: 'All Jobs' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'product', label: 'Product Management' },
    { value: 'graduate', label: 'Graduate Programs' },
    { value: 'analyst', label: 'Analyst Roles' }
  ]

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleJobClick = (link) => {
    window.open(link, '_blank')
  }

  return (
    <div className="job-career-container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">💼</span>
            <h1>JobCareer Hub</h1>
          </div>
          <nav className="nav">
            <button className="nav-btn active">Jobs</button>
            <button className="nav-btn">Companies</button>
            <button className="nav-btn">Resources</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Find Your Dream Career</h2>
          <p>Discover amazing opportunities from top companies worldwide</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search jobs, companies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍 Search</button>
          </div>
        </div>
      </section>

      <section className="filters">
        <div className="filter-container">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.value}
                className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="results-count">
            <span>{filteredJobs.length} jobs found</span>
          </div>
        </div>
      </section>

      <section className="jobs-section">
        <div className="jobs-container">
          {filteredJobs.length === 0 ? (
            <div className="no-jobs">
              <div className="no-jobs-icon">🔍</div>
              <h3>No jobs found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="jobs-grid">
              {filteredJobs.map(job => (
                <div key={job.id} className={`job-card ${job.featured ? 'featured' : ''}`}>
                  {job.featured && <div className="featured-badge">⭐ Featured</div>}
                  <div className="job-header">
                    <div className="company-logo">{job.logo}</div>
                    <div className="company-info">
                      <h3>{job.company}</h3>
                      <p className="job-title">{job.title}</p>
                    </div>
                  </div>
                  
                  <div className="job-details">
                    <div className="detail-item">
                      <span className="detail-icon">📍</span>
                      <span>{job.location}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">⏰</span>
                      <span>{job.type}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">🏷️</span>
                      <span className="category-tag">{job.category}</span>
                    </div>
                  </div>
                  
                  <p className="job-description">{job.description}</p>
                  
                  <div className="job-actions">
                    <button 
                      className="apply-btn"
                      onClick={() => handleJobClick(job.link)}
                    >
                      Apply Now →
                    </button>
                    <button className="save-btn">💾 Save</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Get the latest job alerts delivered to your inbox</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>JobCareer Hub</h4>
            <p>Your gateway to amazing career opportunities</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Top Companies</a></li>
              <li><a href="#">Career Advice</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Resume Builder</a></li>
              <li><a href="#">Interview Tips</a></li>
              <li><a href="#">Salary Guide</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">💼</a>
              <a href="#">📷</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 JobCareer Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default JobCareerPage
