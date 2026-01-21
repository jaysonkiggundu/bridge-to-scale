# Risk & Technical Debt Inventory
**Module 1 – Capstone II Reset: From Prototypes to Products**  
**Project:** AWS CAMP Minority Businesses  
**Team:** Group 7

---

## Overview & Objective

During Senior Capstone I, our team leveraged Lovable.dev and other AI-assisted tools to rapidly produce a functional prototype of the AWS CAMP Minority Business Directory. While this approach enabled fast visual and interaction-level progress, it prioritized speed over long-term maintainability.

As we transition into Senior Capstone II, our role shifts from **feature builders** to **system orchestrators**. This document represents a deliberate “project reset,” where we pause feature development to audit the structural health of our current codebase. The goal is to identify technical debt introduced during AI-assisted prototyping and assess project risks inherent in an agentic development workflow so that future development is intentional, secure, and scalable.

This inventory serves as the bridge between our Lovable.dev prototype and a production-quality system.

---

## Part 1: Technical Debt Audit

The following technical debt items were identified through manual inspection of the Lovable.dev–generated codebase, supported by AI-assisted code review tools. Each item represents a structural limitation that must be addressed before scaling the system.

---

### 1. Missing Backend Integration (Mock Data Dependency)

**Category:** Architectural Debt  

**Description:**  
The current frontend relies on mock or hardcoded data for business listings and user workflows. Although UI components are well structured, there is no live backend API or persistent data layer connected to the application.

**Why This Is Debt:**  
AI-generated prototypes often optimize for visual completeness rather than system integrity. Continuing development on mock data would create fragile logic and increase refactoring cost once real backend integration begins.

**Remediation Plan:**  
Integrate AWS AppSync and DynamoDB to replace mock data with real GraphQL queries and mutations. Enforce a clear separation between presentation logic and data access.

---

### 2. Incomplete Authentication & Authorization Flow

**Category:** Architectural Debt  

**Description:**  
Authentication-related UI elements exist, but there is no end-to-end enforcement of authentication or role-based authorization. User roles are not consistently validated across routes and components.

**Why This Is Debt:**  
Security assumptions are implicit rather than enforced, creating risk as protected routes and sensitive features are added.

**Remediation Plan:**  
Complete Amazon Cognito integration and implement authentication guards and role-based access checks throughout the application.

---

### 3. Lack of Automated Testing

**Category:** Test Debt  

**Description:**  
The codebase currently contains no unit tests, integration tests, or verification layers for AI-generated components.

**Why This Is Debt:**  
Without tests, AI-generated logic cannot be safely refactored or extended. Bugs or hallucinated logic may go undetected and compound over time.

**Remediation Plan:**  
Introduce baseline unit testing for core components and integration tests once backend APIs are connected. Adopt a “trust but verify” approach to AI-generated code.

---

### 4. Weak Error Handling and User Feedback

**Category:** Architectural Debt  

**Description:**  
The application lacks global error boundaries, loading states, and standardized error messaging. Runtime failures would result in silent UI breaks or confusing behavior.

**Why This Is Debt:**  
Poor error handling reduces reliability, complicates debugging, and negatively impacts user experience.

**Remediation Plan:**  
Add error boundaries, loading indicators, and consistent error-handling patterns across the application.

---

### 5. Documentation and Traceability Gaps

**Category:** Documentation Debt  

**Description:**  
AI-generated code lacks contextual comments explaining design intent, and traceability from Agile requirements to specific components is limited.

**Why This Is Debt:**  
Future contributors will struggle to understand system decisions, increasing onboarding time and refactor risk.

**Remediation Plan:**  
Improve inline documentation, document architectural decisions, and maintain traceability through the RTM and GitHub issues.

---

## Part 2: AI & System Risk Assessment

Because this project uses AI-assisted and agentic workflows, risk assessment must go beyond traditional software concerns.

---

### 1. Reliability / Hallucination Risk

**Risk:**  
AI-generated components may contain subtle logical errors or incomplete assumptions that are not immediately visible in the UI.

**Impact:**  
Undetected bugs may propagate as new features are layered on top, increasing refactoring cost later in the semester.

**Mitigation Strategy:**  
Introduce verification checkpoints, testing, and human code reviews for all AI-assisted contributions.

---

### 2. Security & Ethics Risk

**Risk:**  
Incomplete authentication and reliance on generated code may expose the system to insecure data handling or unauthorized access patterns.

**Impact:**  
Potential data leakage, improper access control, and erosion of user trust.

**Mitigation Strategy:**  
Define clear trust boundaries and require human oversight for all authentication, authorization, and security-critical logic.

---

### 3. Dependency & Platform Risk

**Risk:**  
Reliance on Lovable.dev–generated structures and assumptions may limit flexibility if platform templates or APIs change.

**Impact:**  
Future refactors may become more expensive if the team does not assert ownership over the architecture.

**Mitigation Strategy:**  
Gradually decouple generated code from platform-specific assumptions and treat Lovable.dev output as scaffolding, not a long-term dependency.

---

## Part 3: Backlog Integration

To operationalize this audit, the team will convert the most critical technical debt items into actionable backlog work.

### Selected Backlog Items

The following technical debt items will be added to the GitHub Project Board as issues:

1. **Replace Mock Data with AppSync + DynamoDB Integration**  
   - Labels: `technical-debt`, `architecture`

2. **Implement End-to-End Authentication with Cognito**  
   - Labels: `refactor`, `security`

3. **Introduce Baseline Testing and Verification Layer**  
   - Labels: `technical-debt`, `quality`

Each issue will include acceptance criteria and verification steps, ensuring that technical debt remediation is treated as first-class engineering work.

---

## Conclusion

This Risk & Technical Debt Inventory establishes a realistic understanding of the current system’s limitations and risks. By identifying architectural shortcuts, testing gaps, documentation weaknesses, and agentic workflow risks early, the team positions itself to transition from a prototype mindset to production-quality engineering.

This document will guide refactoring, backlog prioritization, and security planning throughout Senior Capstone II, ensuring that future progress is built on a stable and intentional foundation.
