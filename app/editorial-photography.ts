import { servicePhotography } from './service-photography';

// Ten distinct, licensed photographs per directory page. Source records are
// maintained in public/optimization/photography-sources.json.
export const editorialPhotography = [
  servicePhotography['bookkeeping-support'],
  servicePhotography['customer-support-operations'],
  servicePhotography['data-processing-support'],
  servicePhotography['recruitment-coordination'],
  servicePhotography['digital-marketing-support'],
  servicePhotography['ecommerce-operations'],
  servicePhotography['sales-development-support'],
  servicePhotography['executive-assistance'],
  servicePhotography['property-management-support'],
  servicePhotography['healthcare-administration'],
] as const;
