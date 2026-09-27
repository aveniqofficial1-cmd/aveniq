import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Log submission safely in server console
    console.log('[AVENIQ QUOTE INQUIRY RECEIVED]:', {
      timestamp: new Date().toISOString(),
      name: data.fullName,
      company: data.companyName,
      email: data.email,
      whatsapp: data.whatsappNumber,
      websiteType: data.websiteType,
      budget: data.budgetRange,
      featuresCount: data.requiredFeatures?.length || 0,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! We’ve received your requirements. Our team will review your project and contact you shortly.',
    });
  } catch (error) {
    console.error('Error handling quote inquiry:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
