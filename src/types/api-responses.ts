/**
 * API Response Type Definitions
 * Types for all backend API responses
 */

// ============ DOCTOR TYPES ============
export interface DoctorResponse {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  language?: string;
  bio?: string;
  profile_picture_url?: string;
  reg_number?: string;
  years_of_experince?: string;
  programs_and_specialty?: string[];
  professional_association?: string | string[];
  research_interest?: string[];
  qualification?: string[];
  training_and_education?: string[];
  certification?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface DoctorListResponse {
  success: boolean;
  data: {
    doctor: DoctorResponse[];
  };
}

export interface DoctorDetailResponse {
  success: boolean;
  data: {
    doctor: DoctorResponse;
  };
}

// ============ SERVICE TYPES ============
export interface ServiceResponse {
  id: string;
  snippet?: {
    service_name?: string;
    service_description?: string;
    cover_image_url?: string;
  };
  page?: {
    banner_image_url?: string;
    service_overview?: string;
    video_url?: string;
    conditions_we_treat?: string[];
    test_and_diagnostics?: string[];
    treatments_and_procedures?: string[];
  };
  created_at?: string;
  updated_at?: string;
}

export interface ServiceListResponse {
  success: boolean;
  data: {
    services: ServiceResponse[];
  };
}

export interface ServiceDetailResponse {
  success: boolean;
  data: {
    service: ServiceResponse;
  };
}

// ============ ARTICLE/BLOG TYPES ============
export interface ArticleResponse {
  id: string;
  snippet?: {
    title?: string;
    cover_image_url?: string;
  };
  page?: {
    content?: {
      [key: string]: string; // HTML content from Tiptap
    };
    video_link_url?: string;
    category?: string;
  };
  status?: 'draft' | 'published';
  author?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ArticleListResponse {
  success: boolean;
  data: {
    articles: {
      articles: ArticleResponse[];
    };
  };
}

export interface ArticleDetailResponse {
  success: boolean;
  data: {
    article: ArticleResponse;
  };
}

// ============ TEAM MEMBER TYPES ============
export interface TeamMemberResponse {
  id: string;
  profile_picture_url?: string;
  full_name: string;
  role: string;
  category: string;
  bio?: string;
  created_at?: string;
  updated_at?: string;
}

export interface TeamListResponse {
  success: boolean;
  data: {
    team_members: TeamMemberResponse[];
  };
}

export interface TeamDetailResponse {
  success: boolean;
  data: TeamMemberResponse;
}

// ============ TESTIMONIAL TYPES ============
export interface TestimonialResponse {
  id: string;
  title: string;
  patient_name: string;
  service: string;
  video_url: string;
  thumbnail_url?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TestimonialListResponse {
  success: boolean;
  data: {
    testimonials: TestimonialResponse[];
  };
}

export interface TestimonialDetailResponse {
  success: boolean;
  data: {
    testimonial: TestimonialResponse;
  };
}

// ============ JOB/CAREER TYPES ============
export interface JobResponse {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  objective: string;
  duties_and_responsibilities: Record<string, any> | string;
  qualifications_and_requirements: Record<string, any> | string;
  created_at?: string;
  updated_at?: string;
}

export interface JobListResponse {
  success: boolean;
  data: {
    jobs: JobResponse[];
  };
}

export interface JobDetailResponse {
  success: boolean;
  data: JobResponse;
}

// ============ ERROR TYPES ============
export interface ApiErrorResponse {
  success: false;
  message: string;
  data: null;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}
