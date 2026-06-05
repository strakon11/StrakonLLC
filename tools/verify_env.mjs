import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.resolve(__dirname, '../.env') });

async function verifyConnectivity() {
  console.log('🔄 B.L.A.S.T Protocol: Starting Link Phase Verification...');
  
  const envKeys = [
    { key: 'RESEND_API_KEY', name: 'Resend API' },
    { key: 'VERCEL_TOKEN', name: 'Vercel Connect' }
  ];

  let allValid = true;

  for (const { key, name } of envKeys) {
    if (!process.env[key] || process.env[key] === '') {
      console.warn(`⚠️ [WARNING] ${name} (${key}) is missing from .env.`);
      allValid = false;
    } else {
      console.log(`✅ [OK] ${name} token detected.`);
    }
  }

  if (process.env.RESEND_API_KEY) {
    try {
      console.log('🔄 Opting for a ping to Resend API...');
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'delivered@resend.dev',
          subject: 'B.L.A.S.T Link Test',
          html: '<p>System Online</p>'
        })
      });
      
      const result = await response.json();
      if (response.ok) {
          console.log(`✅ [OK] Resend API responded successfully.`);
      } else {
          console.error(`❌ [FAIL] Resend API test failed:`, result.message);
          allValid = false;
      }
    } catch (e) {
      console.error(`❌ [ERROR] Could not ping Resend API:`, e.message);
      allValid = false;
    }
  }

  if (allValid) {
    console.log('🚀 LINK PHASE COMPLETE. Ready for Phase 3 (Architecture).');
  } else {
    console.log('⏸️ [HALT] Link Phase incomplete. Please add `.env` keys to proceed to full logic.');
  }
}

verifyConnectivity();
