import React from 'react';
import './index.css';

function App() {
  return (
    <>
      <nav className="glass" style={{ position: 'sticky', top: 0, zIndex: 100, padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>
            Select<span style={{ color: 'var(--color-secondary)' }}>Ocupacional</span>
          </div>
          <ul style={{ display: 'flex', gap: '2rem', display: 'none' /* hidden on mobile for now */ }}>
            <li><a href="#home">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre Nós</a></li>
          </ul>
          <a href="#contact" className="btn btn-primary">Fale Conosco</a>
        </div>
      </nav>

      <header id="home" className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, var(--bg-main) 0%, #e0f2fe 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 className="animate-fade-in">Excelência em Saúde e Segurança do Trabalho</h1>
          <p className="animate-fade-in delay-100" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Soluções completas em Medicina Ocupacional e Engenharia de Segurança. 
            Protegemos o seu maior patrimônio: as pessoas.
          </p>
          <div className="animate-fade-in delay-200" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#services" className="btn btn-primary">Conheça Nossos Serviços</a>
            <a href="#contact" className="btn btn-outline">Solicitar Orçamento</a>
          </div>
        </div>
      </header>

      <section id="services" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Nossos Serviços</h2>
            <p>Gestão completa de SST para manter sua empresa em conformidade com as normas.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card animate-fade-in">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🩺</div>
              <h3>Exames Ocupacionais</h3>
              <p>Realização de exames admissionais, periódicos, de retorno ao trabalho, mudança de risco e demissionais.</p>
            </div>
            
            <div className="card animate-fade-in delay-100">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
              <h3>PCMSO & PGR</h3>
              <p>Elaboração e gestão do Programa de Controle Médico de Saúde Ocupacional e Programa de Gerenciamento de Riscos.</p>
            </div>
            
            <div className="card animate-fade-in delay-200">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏗️</div>
              <h3>Laudos Técnicos</h3>
              <p>LTCAT, Laudos de Insalubridade e Periculosidade elaborados por engenheiros e médicos especialistas.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ 
              width: '100%', 
              height: '400px', 
              borderRadius: 'var(--radius-lg)', 
              background: 'linear-gradient(45deg, var(--color-primary), var(--color-accent))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '4rem',
              boxShadow: 'var(--shadow-lg)'
            }}>
              🏥
            </div>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <h2>Sobre a Select Ocupacional</h2>
            <p>
              Com anos de experiência no mercado de Saúde e Segurança do Trabalho, a Select Ocupacional 
              nasceu com o propósito de descomplicar a gestão de SST para empresas de todos os portes.
            </p>
            <p>
              Nossa equipe multidisciplinar é formada por médicos do trabalho, engenheiros e técnicos 
              de segurança, prontos para oferecer um atendimento ágil, humanizado e focado em resultados.
            </p>
            <ul style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary)' }}>✓</span> Atendimento personalizado
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary)' }}>✓</span> Tecnologia na gestão de dados
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary)' }}>✓</span> Conformidade total com o eSocial
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contact" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--text-inverse)', padding: '4rem 0 2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Select<span style={{ color: 'white' }}>Ocupacional</span>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>Cuidando da saúde da sua empresa e da segurança dos seus colaboradores.</p>
            </div>
            <div>
              <h4 style={{ color: 'white' }}>Contato</h4>
              <p style={{ color: 'var(--text-muted)' }}>contato@selectocupacional.com.br</p>
              <p style={{ color: 'var(--text-muted)' }}>(11) 99999-9999</p>
            </div>
            <div>
              <h4 style={{ color: 'white' }}>Endereço</h4>
              <p style={{ color: 'var(--text-muted)' }}>Av. Paulista, 1000 - Bela Vista</p>
              <p style={{ color: 'var(--text-muted)' }}>São Paulo - SP</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            &copy; {new Date().getFullYear()} Select Ocupacional. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
