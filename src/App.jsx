import React, { useState } from 'react';
import './index.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="wrap">
          <div className="left">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5FD3C3" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>{' '}
              (19) 97103-2023
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5FD3C3" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>{' '}
              Americana / SP
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5FD3C3" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>{' '}
              contato@selectocupacional.com.br
            </span>
          </div>
          <div className="right">
            <a href="https://instagram.com/selectocupacional" target="_blank" rel="noopener noreferrer">
              @selectocupacional
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header>
        <div className="wrap nav">
          <a href="#topo" className="logo">
            <img src="/Logotipo Select Ocupacional.png" alt="Select Ocupacional" />
          </a>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>A Select</a>
            <a href="#programas" onClick={() => setMenuOpen(false)}>Programas/Documentos</a>
            <a href="#exames" onClick={() => setMenuOpen(false)}>Exames</a>
            <a href="#treinamentos" onClick={() => setMenuOpen(false)}>Treinamentos</a>
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Mais Serviços</a>
            <a href="#segmentos" onClick={() => setMenuOpen(false)}>Clientes</a>
            <a href="#contato" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Fale Conosco</a>
          </nav>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="topo">
        <div className="wrap hero-inner">
          <div>
            <span className="badge">● Segurança e Saúde do Trabalho</span>
            <h1>
              Conformidade em SST com <span className="hl">responsabilidade técnica</span> — do documento ao acompanhamento.
            </h1>
            <p className="sub">
              A Select Ocupacional cuida da gestão completa de Saúde e Segurança do Trabalho da sua empresa: programas e documentos, exames ocupacionais, treinamentos em NRs, eSocial e assessoria — com rigor técnico e atendimento próximo.
            </p>
            <div className="hero-cta">
              <a href="#contato" className="btn btn-primary">Solicitar avaliação →</a>
              <a href="#programas" className="btn btn-ghost">Ver serviços</a>
            </div>
          </div>
          <div className="hero-side">
            <h3>Por que a Select</h3>
            <ul>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>{' '}
                Documentos tecnicamente sustentáveis, prontos para fiscalização
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>{' '}
                eSocial (S-2220 / S-2240 / S-2221) integrado aos seus programas
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>{' '}
                Treinamentos de NR com registro e certificação
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>{' '}
                Acompanhamento contínuo, sem caixas pretas
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="trust-strip">
        <div className="wrap">
          <div>
            <div className="n">+120</div>
            <div className="l">empresas atendidas</div>
          </div>
          <div>
            <div className="n">18</div>
            <div className="l">segmentos cobertos</div>
          </div>
          <div>
            <div className="n">10+</div>
            <div className="l">anos de atuação</div>
          </div>
          <div>
            <div className="n">SP</div>
            <div className="l">Americana e região</div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section" id="sobre">
        <div className="wrap about-grid">
          <div className="txt">
            <span className="eyebrow">A Select Ocupacional</span>
            <h2>Saúde que move pessoas. Segurança que protege empresas.</h2>
            <p>
              Somos uma empresa especializada em Segurança e Saúde do Trabalho. Tratamos saúde e segurança ocupacional como estratégia corporativa — não como uma obrigação burocrática a cumprir no papel.
            </p>
            <p>
              Atuamos da elaboração técnica dos documentos ao acompanhamento da execução, mostrando a cada etapa o que está sendo feito, por que, e qual o nível de proteção da sua empresa. Atendemos empresas de todos os portes e segmentos com colaboradores CLT, com solução personalizada para cada realidade.
            </p>
            <a href="#contato" className="btn btn-navy">Falar com um especialista →</a>
          </div>
          <div className="about-card">
            <h3>Como trabalhamos</h3>
            <div className="row">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </div>
              <div>
                <b>Diagnóstico</b>
                <span>Conversa técnica e levantamento da situação atual</span>
              </div>
            </div>
            <div className="row">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                </svg>
              </div>
              <div>
                <b>Documentação</b>
                <span>Programas, laudos e eSocial com rigor técnico</span>
              </div>
            </div>
            <div className="row">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div>
                <b>Execução</b>
                <span>Exames, treinamentos e planos de ação</span>
              </div>
            </div>
            <div className="row">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9M13 17V5M8 17v-3" />
                </svg>
              </div>
              <div>
                <b>Acompanhamento</b>
                <span>Visibilidade contínua do que está em aberto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAS / DOCUMENTOS */}
      <section className="section cat" id="programas">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Programas / Documentos</span>
            <h2>Programas e documentos em Segurança e Saúde do Trabalho</h2>
          </div>
          <p className="cat-intro">
            Elaboração técnica dos documentos exigidos pela legislação e pelo eSocial — com base em inventário de riscos, consistentes entre si e prontos para fiscalização.
          </p>
          <div className="acc">
            <details>
              <summary>
                <span className="tagn">PGR</span> Programa de Gerenciamento de Riscos <span className="plus">+</span>
              </summary>
              <div className="body">
                <div className="kv">
                  <b>O que é</b>
                  <span>Documento base da gestão de SST (NR-01): reúne os perigos da empresa e, para cada um, avalia probabilidade e severidade por meio do inventário de riscos.</span>
                </div>
                <div className="kv">
                  <b>Objetivo</b>
                  <span>Orientar o Gerenciamento de Riscos Ocupacionais (GRO) e definir as ações preventivas e corretivas para evitar acidentes e doenças ocupacionais.</span>
                </div>
                <div className="kv">
                  <b>Obrigatoriedade</b>
                  <span>Toda empresa com colaboradores CLT (com regras simplificadas para MEI e micro/pequenas em certos graus de risco).</span>
                </div>
                <div className="kv">
                  <b>Validade</b>
                  <span>Reavaliado a cada 2 anos, ou sempre que houver mudança de processo, layout ou novos riscos.</span>
                </div>
              </div>
            </details>
            <details>
              <summary>
                <span className="tagn">LTCAT</span> Laudo Técnico das Condições Ambientais do Trabalho <span className="plus">+</span>
              </summary>
              <div className="body">
                <div className="kv">
                  <b>O que é</b>
                  <span>Laudo exigido pelo INSS que documenta os agentes nocivos (físicos, químicos e biológicos) presentes no ambiente de trabalho.</span>
                </div>
                <div className="kv">
                  <b>Objetivo</b>
                  <span>Caracterizar a exposição a agentes nocivos e embasar a aposentadoria especial e o recolhimento previdenciário correspondente.</span>
                </div>
                <div className="kv">
                  <b>Responsável</b>
                  <span>Engenheiro de Segurança do Trabalho ou Médico do Trabalho habilitado.</span>
                </div>
                <div className="kv">
                  <b>Validade</b>
                  <span>Deve ser mantido atualizado e renovado sempre que houver alteração no ambiente ou no processo de trabalho.</span>
                </div>
              </div>
            </details>
            <details>
              <summary>
                <span className="tagn">PCMSO</span> Programa de Controle Médico de Saúde Ocupacional <span className="plus">+</span>
              </summary>
              <div className="body">
                <div className="kv">
                  <b>O que é</b>
                  <span>Programa da NR-07 que monitora a saúde dos trabalhadores por anamnese e exames, com base nos riscos apontados no PGR.</span>
                </div>
                <div className="kv">
                  <b>Objetivo</b>
                  <span>Identificar precocemente alterações de saúde relacionadas ao trabalho e definir a estratégia de exames ocupacionais.</span>
                </div>
                <div className="kv">
                  <b>Obrigatoriedade</b>
                  <span>Todas as empresas com empregados, de qualquer porte.</span>
                </div>
                <div className="kv">
                  <b>Validade</b>
                  <span>1 ano.</span>
                </div>
              </div>
            </details>
            <details>
              <summary>
                <span className="tagn">PPRA/PPR</span> Avaliação de exposições e proteção respiratória <span className="plus">+</span>
              </summary>
              <div className="body">
                <div className="kv">
                  <b>O que é</b>
                  <span>Conjunto de avaliações de exposição a agentes físicos, químicos e biológicos (referência para caracterização de insalubridade) e o Programa de Proteção Respiratória (PPR) para ambientes com material em suspensão.</span>
                </div>
                <div className="kv">
                  <b>Objetivo</b>
                  <span>Estabelecer medidas de eliminação, redução ou controle dos riscos e o uso correto de proteção respiratória.</span>
                </div>
                <div className="kv">
                  <b>Validade</b>
                  <span>Programa de referência (sem validade fixa para o PPRA); o PPR é revisado anualmente quanto à eficácia.</span>
                </div>
              </div>
            </details>
            <details>
              <summary>
                <span className="tagn">PCA</span> Programa de Conservação Auditiva <span className="plus">+</span>
              </summary>
              <div className="body">
                <div className="kv">
                  <b>O que é</b>
                  <span>Conjunto de medidas técnicas e administrativas para ambientes com exposição ao agente físico ruído.</span>
                </div>
                <div className="kv">
                  <b>Objetivo</b>
                  <span>Prevenir a Perda Auditiva Induzida por Ruído Ocupacional (PAIR).</span>
                </div>
                <div className="kv">
                  <b>Obrigatoriedade</b>
                  <span>Locais com possibilidade de exposição a altos níveis de ruído.</span>
                </div>
                <div className="kv">
                  <b>Validade</b>
                  <span>1 ano, com revisões ao longo do período conforme alterações.</span>
                </div>
              </div>
            </details>
            <details>
              <summary>
                <span className="tagn">NR-17</span> Ergonomia (AET) <span className="plus">+</span>
              </summary>
              <div className="body">
                <div className="kv">
                  <b>O que é</b>
                  <span>Análise Ergonômica do Trabalho que avalia a adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores.</span>
                </div>
                <div className="kv">
                  <b>Objetivo</b>
                  <span>Proporcionar conforto, segurança e desempenho eficiente, prevenindo lesões por esforço e movimentos repetitivos.</span>
                </div>
                <div className="kv">
                  <b>Obrigatoriedade</b>
                  <span>Empresas com atividades manuais, esforço físico, repetição ou operação de checkout/auto-serviço.</span>
                </div>
                <div className="kv">
                  <b>Validade</b>
                  <span>Indeterminada, até que mude o layout ou o processo.</span>
                </div>
              </div>
            </details>
            <details>
              <summary>
                <span className="tagn">PPP</span> Perfil Profissiográfico Previdenciário <span className="plus">+</span>
              </summary>
              <div className="body">
                <div className="kv">
                  <b>O que é</b>
                  <span>Documento que reúne dados administrativos e o histórico de exposição a riscos do empregado, extraídos do LTCAT.</span>
                </div>
                <div className="kv">
                  <b>Objetivo</b>
                  <span>Consolidar as informações sobre agentes nocivos e orientar o reconhecimento de aposentadoria especial.</span>
                </div>
                <div className="kv">
                  <b>Obrigatoriedade</b>
                  <span>Exigência da Previdência Social a todas as empresas, independente de porte ou segmento.</span>
                </div>
                <div className="kv">
                  <b>Validade</b>
                  <span>Revisão anual e entrega obrigatória ao empregado na rescisão.</span>
                </div>
              </div>
            </details>
            <details>
              <summary>
                <span className="tagn">+</span> Mapa de Riscos, Ordem de Serviço, APR e Permissão de Trabalho <span className="plus">+</span>
              </summary>
              <div className="body">
                <div className="kv">
                  <b>Mapa de Riscos</b>
                  <span>Representação gráfica dos riscos do ambiente, elaborada com a CIPA e revista ao menos anualmente.</span>
                </div>
                <div className="kv">
                  <b>Ordem de Serviço</b>
                  <span>Informa o colaborador sobre os riscos e as medidas de segurança; atualização mínima anual.</span>
                </div>
                <div className="kv">
                  <b>Análise de Riscos (APR/AST)</b>
                  <span>Estudo antecipado das fases do trabalho para detectar e neutralizar riscos em atividades perigosas.</span>
                </div>
                <div className="kv">
                  <b>Permissão de Trabalho (PT)</b>
                  <span>Autorização por escrito para serviços de risco (altura, eletricidade, espaço confinado, trabalho a quente).</span>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* EXAMES */}
      <section className="section" id="exames">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Exames</span>
            <h2>Exames em Segurança e Saúde do Trabalho</h2>
            <p>ASOs e exames complementares integrados ao PCMSO, para definir e comprovar a aptidão dos colaboradores às suas funções.</p>
          </div>
          <div className="exams-grid">
            <div className="ecard">
              <h3>🩺 Atestados de Saúde Ocupacional (ASO)</h3>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Admissional
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Periódico
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Mudança de função / risco
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Retorno ao trabalho
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Demissional
                </li>
              </ul>
            </div>
            <div className="ecard">
              <h3>🔬 Exames complementares</h3>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Audiometria
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Espirometria
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Acuidade visual
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Eletrocardiograma (ECG) e laboratoriais
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Toxicológico (quando aplicável)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TREINAMENTOS */}
      <section className="section tr" id="treinamentos">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow" style={{ color: '#5FD3C3' }}>Treinamentos</span>
            <h2>Treinamentos nas Normas Regulamentadoras</h2>
            <p>Capacitações com registro e certificação para cada colaborador, conforme o segmento da sua empresa.</p>
          </div>
          <div className="nr-grid">
            <div className="nr"><b>NR-01</b><span>Disposições gerais e GRO</span></div>
            <div className="nr"><b>NR-06</b><span>Equipamentos de Proteção Individual</span></div>
            <div className="nr"><b>NR-10</b><span>Segurança em eletricidade</span></div>
            <div className="nr"><b>NR-11</b><span>Movimentação de materiais</span></div>
            <div className="nr"><b>NR-12</b><span>Segurança em máquinas</span></div>
            <div className="nr"><b>NR-13</b><span>Caldeiras e vasos de pressão</span></div>
            <div className="nr"><b>NR-17</b><span>Ergonomia</span></div>
            <div className="nr"><b>NR-20</b><span>Inflamáveis e combustíveis</span></div>
            <div className="nr"><b>NR-33</b><span>Espaços confinados</span></div>
            <div className="nr"><b>NR-35</b><span>Trabalho em altura</span></div>
            <div className="nr"><b>CIPA</b><span>Capacitação da comissão (NR-05)</span></div>
            <div className="nr"><b>Brigada</b><span>Primeiros socorros e combate a incêndio</span></div>
          </div>
        </div>
      </section>

      {/* MAIS SERVIÇOS */}
      <section className="section" id="servicos">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Mais Serviços</span>
            <h2>Assessoria e serviços complementares</h2>
          </div>
          <div className="more-grid">
            <div className="mcard">
              <div className="ic">📡</div>
              <h3>eSocial — SST</h3>
              <p>Transmissão dos eventos S-2220, S-2240 e S-2221, consistente com seus laudos e programas.</p>
            </div>
            <div className="mcard">
              <div className="ic">🧭</div>
              <h3>Diagnóstico de conformidade</h3>
              <p>Levantamento do que já existe, o que precisa ser atualizado e o que está em aberto.</p>
            </div>
            <div className="mcard">
              <div className="ic">🛠️</div>
              <h3>Planos de ação</h3>
              <p>Projetos e planos para mitigação de riscos, com acompanhamento técnico contínuo.</p>
            </div>
            <div className="mcard">
              <div className="ic">🧠</div>
              <h3>Saúde física e mental</h3>
              <p>Palestras e ações de promoção da saúde no ambiente de trabalho (incl. riscos psicossociais).</p>
            </div>
            <div className="mcard">
              <div className="ic">📋</div>
              <h3>Laudos de insalubridade e periculosidade</h3>
              <p>Avaliações técnicas para enquadramento e adicionais legais.</p>
            </div>
            <div className="mcard">
              <div className="ic">🤝</div>
              <h3>Assessoria em fiscalização</h3>
              <p>Suporte técnico em notificações e autuações, com plano de adequação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTOS */}
      <section className="section seg" id="segmentos">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Clientes</span>
            <h2>Segmentos que atendemos</h2>
            <p>Atendemos qualquer empresa com colaboradores CLT, com escopo adaptado a cada realidade.</p>
          </div>
          <div className="seg-tags">
            <span>Indústria</span><span>Metalurgia</span><span>Construção civil</span>
            <span>Saúde</span><span>Supermercados</span><span>Transportes</span>
            <span>Logística</span><span>Comércio</span><span>Alimentação</span>
            <span>Serviços</span><span>Educação</span><span>Tecnologia</span>
            <span>Químicos</span><span>Eletrônica</span>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="section contact" id="contato">
        <div className="wrap contact-grid">
          <div>
            <span className="eyebrow" style={{ color: '#5FD3C3' }}>Fale Conosco</span>
            <h2>Vamos avaliar a situação de SST da sua empresa</h2>
            <p className="lead">Sem compromisso. Entendemos seu segmento e porte e retornamos com um diagnóstico e proposta personalizada.</p>
            <div className="units">
              <div className="cunit">
                <b>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5FD3C3" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>{' '}
                  Unidade Americana / SP
                </b>
                <p>Praça Francisco Matarazzo, 31 · Vila Gallo · Americana / SP · CEP 13466-319</p>
              </div>
              <div className="cunit">
                <b>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5FD3C3" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>{' '}
                  Atendimento
                </b>
                <p>
                  <a href="https://wa.me/5519971032023" target="_blank" rel="noopener noreferrer">WhatsApp (19) 97103-2023</a> · <a href="mailto:contato@selectocupacional.com.br">contato@selectocupacional.com.br</a>
                </p>
              </div>
            </div>
          </div>
          <form className="cform" onSubmit={(e) => e.preventDefault()}>
            <label>Nome</label>
            <input type="text" placeholder="Seu nome" />
            <label>Empresa</label>
            <input type="text" placeholder="Nome da empresa" />
            <label>E-mail ou WhatsApp</label>
            <input type="text" placeholder="Como podemos retornar" />
            <label>Como podemos ajudar?</label>
            <textarea rows={3} placeholder="Conte rapidamente sua necessidade" />
            <a href="https://wa.me/5519971032023?text=Quero%20uma%20avalia%C3%A7%C3%A3o%20de%20SST%20da%20minha%20empresa" className="btn btn-primary" style={{ display: 'flex', textAlign: 'center' }}>
              Enviar pelo WhatsApp →
            </a>
            <small>Ao enviar, você abre uma conversa no WhatsApp com nossa equipe.</small>
          </form>
          <div className="map-wrap">
            <iframe
              title="Mapa — Select Ocupacional, Americana/SP"
              src="https://maps.google.com/maps?q=Pra%C3%A7a%20Francisco%20Matarazzo%2C%2031%2C%20Vila%20Gallo%2C%20Americana%20-%20SP%2C%2013466-319&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a%20Francisco%20Matarazzo%2C%2031%2C%20Vila%20Gallo%2C%20Americana%20-%20SP%2C%2013466-319" target="_blank" rel="noopener noreferrer">
              Abrir no Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <img src="/Logotipo Select Ocupacional.png" alt="Select Ocupacional" />
              <p style={{ color: '#9FB3C8', maxWidth: '320px' }}>Gestão de Saúde e Segurança do Trabalho. Saúde que move pessoas.</p>
              <a href="https://instagram.com/selectocupacional" target="_blank" rel="noopener noreferrer" className="foot-ig">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>{' '}
                @selectocupacional
              </a>
            </div>
            <div>
              <h4>Serviços</h4>
              <a href="#programas">Programas / Documentos</a>
              <a href="#exames">Exames</a>
              <a href="#treinamentos">Treinamentos</a>
              <a href="#servicos">Mais Serviços</a>
            </div>
            <div>
              <h4>Contato</h4>
              <a href="https://wa.me/5519971032023" target="_blank" rel="noopener noreferrer">(19) 97103-2023</a>
              <a href="mailto:contato@selectocupacional.com.br">contato@selectocupacional.com.br</a>
              <a href="#contato">Praça Francisco Matarazzo, 31 · Vila Gallo · Americana / SP</a>
            </div>
          </div>
          <div className="foot-bottom">© {new Date().getFullYear()} Select Ocupacional · Segurança e Saúde do Trabalho</div>
        </div>
      </footer>
    </>
  );
}

export default App;
