import React, { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleMake: '',
    vehicleModel: '',
    budget: '',
    zipCode: '',
    packageTier: 'concierge',
    clientName: '',
    clientEmail: '',
    agreedToTerms: false
  });

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => Math.max(1, prev - 1));

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px', color: '#1a1a1a' }}>
      {/* Header */}
      <header style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '15px', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', color: '#111827' }}>Automotive Concierge Solutions</h1>
          <p style={{ margin: '5px 0 0 0', color: '#6b7280', fontSize: '14px' }}>Data-Driven Vehicle Purchasing & Negotiation Representation</p>
        </div>
        <span style={{ background: '#e0e7ff', color: '#3730a3', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
          Step {step} of 4
        </span>
      </header>

      {/* Step 1: Vehicle & Market Intake */}
      {step === 1 && (
        <section>
          <h2>1. Vehicle & Search Criteria</h2>
          <p style={{ color: '#4b5563' }}>Tell us what vehicle you are looking for so our analytics engine can search real-time local dealer inventory.</p>
          <div style={{ display: 'grid', gap: '15px', margin: '20px 0' }}>
            <label>
              <strong>Vehicle Make:</strong>
              <input 
                type="text" 
                placeholder="e.g. Toyota, BMW, Ford" 
                value={formData.vehicleMake}
                onChange={e => setFormData({...formData, vehicleMake: e.target.value})}
                style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc' }}
              />
            </label>
            <label>
              <strong>Vehicle Model / Trim:</strong>
              <input 
                type="text" 
                placeholder="e.g. RAV4 Hybrid, X5 XDrive40i" 
                value={formData.vehicleModel}
                onChange={e => setFormData({...formData, vehicleModel: e.target.value})}
                style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc' }}
              />
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <label>
                <strong>Target Budget ($):</strong>
                <input 
                  type="number" 
                  placeholder="45000" 
                  value={formData.budget}
                  onChange={e => setFormData({...formData, budget: e.target.value})}
                  style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc' }}
                />
              </label>
              <label>
                <strong>ZIP Code:</strong>
                <input 
                  type="text" 
                  placeholder="e.g. 90210" 
                  value={formData.zipCode}
                  onChange={e => setFormData({...formData, zipCode: e.target.value})}
                  style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc' }}
                />
              </label>
            </div>
          </div>
          <button onClick={handleNext} style={primaryBtnStyle}>Next: Market Analytics & Pricing ➔</button>
        </section>
      )}

      {/* Step 2: Live Inventory Analytics Demo */}
      {step === 2 && (
        <section>
          <h2>2. Real-Time Dealership Market Analytics</h2>
          <p style={{ color: '#4b5563' }}>Based on live inventory data in your local radius:</p>
          
          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>Target: {formData.vehicleMake || 'Selected Vehicle'} {formData.vehicleModel}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', textAlign: 'center' }}>
              <div style={metricBoxStyle}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>Avg Dealer Markup</span>
                <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '5px 0', color: '#dc2626' }}>+$2,850</p>
              </div>
              <div style={metricBoxStyle}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>Concierge Target Savings</span>
                <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '5px 0', color: '#16a34a' }}>$3,200 - $4,500</p>
              </div>
              <div style={metricBoxStyle}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>Local Inventory Supply</span>
                <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '5px 0', color: '#2563eb' }}>Moderate (14 Units)</p>
              </div>
            </div>
          </div>

          <h3>Select Your Service Tier:</h3>
          <div style={{ display: 'grid', gap: '15px', margin: '15px 0' }}>
            <label style={tierCardStyle(formData.packageTier === 'audit')}>
              <input 
                type="radio" 
                name="tier" 
                checked={formData.packageTier === 'audit'} 
                onChange={() => setFormData({...formData, packageTier: 'audit'})} 
              />
              <div style={{ marginLeft: '10px' }}>
                <strong>Deal Markup & Price Audit — $199</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '13px', color: '#6b7280' }}>Full report identifying hidden dealer fees, invoice price, and max negotiation targets.</p>
              </div>
            </label>

            <label style={tierCardStyle(formData.packageTier === 'concierge')}>
              <input 
                type="radio" 
                name="tier" 
                checked={formData.packageTier === 'concierge'} 
                onChange={() => setFormData({...formData, packageTier: 'concierge'})} 
              />
              <div style={{ marginLeft: '10px' }}>
                <strong>Full Concierge & Negotiation Service — $499</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '13px', color: '#6b7280' }}>End-to-end representation. We negotiate directly with dealers and deliver the best contract offer.</p>
              </div>
            </label>

            <label style={tierCardStyle(formData.packageTier === 'vip')}>
              <input 
                type="radio" 
                name="tier" 
                checked={formData.packageTier === 'vip'} 
                onChange={() => setFormData({...formData, packageTier: 'vip'})} 
              />
              <div style={{ marginLeft: '10px' }}>
                <strong>VIP Executive Representation & Home Delivery — $999</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '13px', color: '#6b7280' }}>Full negotiation, flatbed vehicle delivery to your driveway, and lease/finance contract review.</p>
              </div>
            </label>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleBack} style={secondaryBtnStyle}> Back</button>
            <button onClick={handleNext} style={primaryBtnStyle}>Next: Legal Agreement ➔</button>
          </div>
        </section>
      )}

      {/* Step 3: Legal Authorization & E-Sign */}
      {step === 3 && (
        <section>
          <h2>3. Automotive Representation Agreement</h2>
          <p style={{ color: '#4b5563' }}>Please review and authorize representation terms for negotiations.</p>

          <div style={{ border: '1px solid #d1d5db', background: '#fcfcfc', padding: '15px', borderRadius: '6px', height: '160px', overflowY: 'scroll', fontSize: '13px', color: '#374151', marginBottom: '15px' }}>
            <p><strong>CLIENT AUTHORIZATION & CONSULTING AGREEMENT</strong></p>
            <p>1. <strong>Scope of Service:</strong> Client retains Automotive Concierge Solutions to act as authorized consulting representative for negotiating auto purchase/lease pricing on client's behalf.</p>
            <p>2. <strong>Scientific & Technical Consulting Standards:</strong> Vehicle price evaluations, days-on-market analysis, and dealer markup audits are derived from technical market statistics and regional inventory telemetry.</p>
            <p>3. <strong>Client Approval:</strong> Client retains final authority to execute or decline any negotiated vehicle contract. Agent does not execute final dealer credit or purchase contracts without express written consent.</p>
          </div>

          <div style={{ display: 'grid', gap: '15px', marginBottom: '20px' }}>
            <label>
              <strong>Full Name (Digital Signature):</strong>
              <input 
                type="text" 
                placeholder="John Doe" 
                value={formData.clientName}
                onChange={e => setFormData({...formData, clientName: e.target.value})}
                style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc' }}
              />
            </label>
            <label>
              <strong>Email Address:</strong>
              <input 
                type="email" 
                placeholder="john@example.com" 
                value={formData.clientEmail}
                onChange={e => setFormData({...formData, clientEmail: e.target.value})}
                style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc' }}
              />
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
              <input 
                type="checkbox" 
                checked={formData.agreedToTerms}
                onChange={e => setFormData({...formData, agreedToTerms: e.target.checked})}
              />
              I agree to the Client Representation Terms & Consulting Disclosures.
            </label>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleBack} style={secondaryBtnStyle}> Back</button>
            <button onClick={handleNext} disabled={!formData.agreedToTerms || !formData.clientName} style={formData.agreedToTerms && formData.clientName ? primaryBtnStyle : disabledBtnStyle}>
              Next: Secure Stripe Payment ➔
            </button>
          </div>
        </section>
      )}

      {/* Step 4: Stripe Payment Checkout */}
      {step === 4 && (
        <section style={{ textAlign: 'center', padding: '20px 0' }}>
          <h2>4. Complete Checkout & Activate Concierge</h2>
          <p style={{ color: '#4b5563' }}>You are selecting the <strong>{formData.packageTier.toUpperCase()} Package</strong>.</p>
          
          <div style={{ background: '#f3f4f6', padding: '25px', borderRadius: '12px', margin: '25px 0', border: '1px solid #e5e7eb' }}>
            <h3 style={{ margin: 0, fontSize: '32px', color: '#111827' }}>
              {formData.packageTier === 'audit' ? '$199.00' : formData.packageTier === 'vip' ? '$999.00' : '$499.00'}
            </h3>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '5px 0 0 0' }}>One-time service fee. Guaranteed vehicle savings strategy.</p>
          </div>

          <button 
            onClick={() => alert(`Stripe Checkout Session Initiated for ${formData.clientName} (${formData.clientEmail})`)}
            style={{ ...primaryBtnStyle, width: '100%', padding: '15px', fontSize: '18px', background: '#635bff' }}
          >
            🔒 Pay Securely with Stripe
          </button>

          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '15px' }}>
            Protected by 256-bit SSL Encryption. Direct advisor consultation starts immediately after checkout.
          </p>
        </section>
      )}
    </div>
  );
}

const primaryBtnStyle = { background: '#2563eb', color: '#fff', padding: '12px 20px', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', flex: 1 };
const secondaryBtnStyle = { background: '#e5e7eb', color: '#374151', padding: '12px 20px', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' };
const disabledBtnStyle = { ...primaryBtnStyle, background: '#9ca3af', cursor: 'not-allowed' };
const metricBoxStyle = { background: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #e5e7eb' };
const tierCardStyle = (active) => ({ display: 'flex', alignItems: 'center', padding: '15px', border: active ? '2px solid #2563eb' : '1px solid #d1d5db', background: active ? '#eff6ff' : '#fff', borderRadius: '8px', cursor: 'pointer' });
