---
tags: [plan, portfolio, personal-branding]
aliases: [portfolio plan, revamp plan]
---

# Portfolio Revamp Plan

> Goal: Bikin portofolio yang readable untuk semua audiens (recruiter, klien, investor) sekaligus nunjukkin sisi founder/builder Aril — bukan cuma developer.

---

## Problem Sekarang

| Issue | Detail |
|-------|--------|
| Navigation membingungkan | `⚛️Main.tsx`, `📝About.md` — keren tapi orang harus mikir dulu |
| Hero lambat diparsing | `const name = "Aril Saputra"` butuh 2-3 detik extra dibanding nama polos |
| Skill bars nggak informatif | Persentase subjektif, orang nggak bisa verify |
| Projects kurang dalam | 4 project, deskripsi 1-2 kalimat, nggak ada impact/story |
| Nggak ada founder narrative | KodingYuk disebut tapi cerita/traction-nya nggak ada |
| Target audiens nggak jelas | Satu portofolio untuk developer, klien, dan investor sekaligus |

---

## Audiens Target (Prioritas)

1. **Klien potensial** — yang mau hire KodingYuk atau Aril sebagai freelancer
2. **Recruiter / hiring manager** — untuk full-time atau internship
3. **Founder komunitas / kolaborator** — yang mau co-build sesuatu
4. *(Future)* Investor — kalau produk udah ada traction

---

## Struktur Baru yang Disarankan

### 1. Hero Section
- Nama langsung, jelas, besar
- Tagline 1 kalimat: siapa, buat apa, untuk siapa
  - Contoh: *"I build digital products — from idea to launch."*
- CTA dua jalur: `See my work` dan `Build with me`
- Boleh tetap ada developer aesthetic tapi jangan jadi barrier pertama

### 2. About (Dipersingkat)
- 3-4 kalimat max, fokus pada value proposition bukan CV
- Highlight: founder, builder, technical
- Hapus class syntax — pakai plain language

### 3. Section BARU: Products / Startups
Ini yang paling penting untuk founder narrative. Tiap produk punya:
- **Nama + logo/screenshot**
- **1-liner problem statement** — masalah apa yang di-solve
- **Stack** (tetap boleh ada)
- **Traction / status** — live, in dev, X users, revenue, dsb.
- **Role kamu** — founder, solo builder, CTO, dll.
- **Link**: Demo, App Store, atau "Coming Soon"

Contoh card:
```
Sampahku.id
"Platform manajemen sampah untuk komunitas urban."
Status: Live · 500+ users
Stack: Next.js, Firebase
Role: Founder & Solo Developer
[Live Demo] [Case Study]
```

### 4. Experience (Disingkat)
- Timeline vertikal sederhana
- Fokus ke pencapaian bukan task list
- Hapus `>>` prefix — pakai bullet biasa

### 5. Skills
- Hapus persentase bars
- Ganti dengan grouped tags atau icon grid
- Kategorikan: Mobile · Web · Backend · Tools

### 6. Contact
- Tetap bisa kreatif tapi pastikan email dan LinkedIn langsung keliatan
- Boleh pertahankan `await connectTo()` kalau mau, asal contact info jelas

---

## Quick Wins (Tanpa Redesign Besar)

Kalau mau iterasi cepat dulu sebelum redesign total:

- [ ] Ganti nav label jadi hybrid: `About` bukan `📝About.md`
- [ ] Tambah subtitle di hero yang plain: *"Fullstack & Mobile Developer · Founder of KodingYuk!"*
- [ ] Expand project descriptions jadi minimal 3-4 kalimat + tambah status/traction
- [ ] Hapus skill percentages, ganti jadi tag pills
- [ ] Tambah 1 "Featured Product" card di atas project list

---

## Roadmap Implementasi

```
Phase 1 — Content (1-2 hari)
  └── Tulis ulang copy tiap section
  └── Dokumentasikan traction/status tiap produk
  └── Siapkan screenshots produk yang bagus

Phase 2 — UI Iteration (3-5 hari)
  └── Redesign navigation
  └── Revamp hero section
  └── Buat Products/Startups section baru
  └── Replace skill bars

Phase 3 — Polish (1-2 hari)
  └── Mobile responsiveness check
  └── Loading speed audit
  └── Copy review — pastikan tiap section punya 1 clear message
```

---

## Tone & Positioning

**Sekarang terasa seperti:** Junior developer bikin portofolio keren
**Harusnya terasa seperti:** Builder yang sudah ngelaunch produk nyata dan siap kolaborasi

Kuncinya bukan ubah aesthetic — tapi tambah **bukti** dan **cerita** di balik setiap produk.

---

## Referensi Portofolio Founder yang Bagus

- [leerob.io](https://leerob.io) — clean, content-first, tetap technical
- [rauchg.com](https://rauchg.com) — minimal tapi authority tinggi
- [paco.me](https://paco.me) — developer aesthetic tapi sangat readable

---

*Dibuat: 2026-06-23*
