# Resume Core

The vocabulary for resume content and its structure. Defined by `packages/schema`, shared with `packages/resume`; all other contexts (PDF, web, API, DOCX, MCP) consume this language.

## Language

### Content

**Resume**:
The complete document a user authors — content sections plus the design metadata describing how they render.

**Section**:
A titled block of resume content that can be placed on a page. Umbrella term for Standard Sections, Custom Sections, and the Summary.

**Standard Section**:
One of the twelve fixed sections every resume has: profiles, experience, education, projects, skills, languages, interests, awards, certifications, publications, volunteer, references.
_Avoid_: built-in section, fixed section

**Custom Section**:
An author-created section identified by UUID. It carries a Section Type that determines the shape of its Items.
_Avoid_: user section

**Summary**:
A standalone section holding a single rich-text introduction. It is neither a Standard nor a Custom Section, but participates in layout like any other Section.

**Section Type**:
The kind of content a section holds, determining its Item shape — the twelve standard types plus `summary` and `cover-letter`. (Note: the code type `CustomSectionType` covers all fourteen, not just custom ones.)

**Item**:
A single entry within a section (one job, one skill, one award). Has identity and a Hidden flag.

**Role**:
A nested entry inside an Experience Item showing career progression at a single company.

**Basics**:
The author's identity block — name, headline, contact details, custom fields. Not a Section; it renders in the template header.

**Picture**:
The author's photograph and its display settings. Not a Section.

**Cover Letter**:
A Custom Section type whose Items hold a recipient block and letter body. Exported as its own document via the `cover-letter` Export Target.

### Visibility

**Hidden**:
The authored flag that excludes a section, item, or picture from rendering. An explicit choice by the author.
_Avoid_: invisible, disabled

**Visible**:
Derived, not the negation of Hidden: a section is Visible only if it is not Hidden AND has renderable content — at least one non-Hidden Item with a Primary Title, or (for Summary) non-empty content. Only Visible sections render in the PDF.
_Avoid_: shown, unhidden

**Primary Title**:
The one Item field that must be non-blank for the Item to count as renderable (e.g. company for experience, school for education, name for skills).

### Layout & Design

**Layout**:
The arrangement of Section References across Pages.

**Page**:
One page of the layout, holding a Main column and an optional Sidebar.

**Section Reference**:
An entry in a Page's main or sidebar array: a Standard Section key, `summary`, or a Custom Section UUID. Distinct from Section Type.
_Avoid_: section ID

**Sidebar**:
The narrower page column. A full-width Page has no Sidebar.

**Section Columns**:
The number of columns a section's Items flow into, within whichever page column the section sits. Not related to Main/Sidebar.

**Template**:
A named overall design that determines the resume's appearance.

**Style Rule**:
An author-defined styling override targeting a scope (global, a Section Type, or a specific section) and configuring one or more Style Slots.

**Style Slot**:
A named visual part of rendered output that a Style Rule can target (heading, item, link, icon, …).

**Style Intent**:
The constrained set of visual properties a Style Rule assigns to a Slot — only properties that translate safely to PDF rendering.

### Export

**Export Target**:
Which document an export produces: `resume` (everything except Cover Letter sections) or `cover-letter` (only Visible Cover Letter sections). One Resume can yield both artifacts.
