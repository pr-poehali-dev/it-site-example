import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { toast } = useToast();

  const projects = [
    {
      id: 1,
      title: 'AI Analytics Platform',
      description: 'Платформа для анализа больших данных с использованием машинного обучения',
      tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      image: 'https://cdn.poehali.dev/projects/cfaac9d6-aa1e-4d6f-b4cc-3ecf73580d22/files/a727b65f-74ef-47a8-ad5e-e615e246b12b.jpg'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Облачная инфраструктура для enterprise-решений с автомасштабированием',
      tech: ['Kubernetes', 'Docker', 'AWS', 'Terraform'],
      image: 'https://cdn.poehali.dev/projects/cfaac9d6-aa1e-4d6f-b4cc-3ecf73580d22/files/aa766a29-2d87-46bf-ba42-e6ea58012bb8.jpg'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Мобильное приложение для управления финансами с биометрической аутентификацией',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Redis'],
      image: 'https://cdn.poehali.dev/projects/cfaac9d6-aa1e-4d6f-b4cc-3ecf73580d22/files/c1fc9543-6aaf-4b79-8984-5f9ad723ae82.jpg'
    }
  ];

  const team = [
    {
      name: 'Алексей Иванов',
      role: 'Tech Lead',
      avatar: '/placeholder.svg',
      skills: ['Architecture', 'Cloud', 'AI/ML']
    },
    {
      name: 'Мария Петрова',
      role: 'Senior Frontend',
      avatar: '/placeholder.svg',
      skills: ['React', 'TypeScript', 'UX']
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'DevOps Engineer',
      avatar: '/placeholder.svg',
      skills: ['K8s', 'CI/CD', 'Monitoring']
    },
    {
      name: 'Елена Смирнова',
      role: 'Backend Lead',
      avatar: '/placeholder.svg',
      skills: ['Node.js', 'Python', 'DB']
    }
  ];

  const technologies = [
    { name: 'React', icon: 'Code2', color: 'text-cyan-400' },
    { name: 'Node.js', icon: 'Server', color: 'text-green-400' },
    { name: 'Python', icon: 'FileCode', color: 'text-yellow-400' },
    { name: 'Docker', icon: 'Package', color: 'text-blue-400' },
    { name: 'Kubernetes', icon: 'Boxes', color: 'text-purple-400' },
    { name: 'PostgreSQL', icon: 'Database', color: 'text-cyan-400' },
    { name: 'AWS', icon: 'Cloud', color: 'text-orange-400' },
    { name: 'TypeScript', icon: 'FileJson', color: 'text-blue-400' }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A1F2C 0%, #2D1B4E 50%, #0F172A 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              TechVision
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаем инновационные решения, которые меняют будущее технологий
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Связаться
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </div>

      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Наши проекты
            </h2>
            <p className="text-muted-foreground text-lg">
              Портфолио решений, которые вывели бизнес на новый уровень
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-card border-border hover-scale cursor-pointer group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Команда экспертов
            </h2>
            <p className="text-muted-foreground text-lg">
              Профессионалы с опытом работы в крупнейших tech-компаниях
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="bg-card border-border text-center hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/30">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded border border-secondary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Технологический стек
            </h2>
            <p className="text-muted-foreground text-lg">
              Используем передовые инструменты для создания надежных решений
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className="flex flex-col items-center gap-4 p-6 bg-card border border-border rounded-lg hover-scale cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Icon 
                  name={tech.icon as any} 
                  size={48} 
                  className={`${tech.color} group-hover:scale-110 transition-transform`}
                />
                <span className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Начните свой проект
            </h2>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами, и мы обсудим вашу идею
            </p>
          </div>

          <Card className="bg-card border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Ваше имя" 
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о вашем проекте..." 
                    rows={5}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@techvision.dev</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>Москва, Россия</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 TechVision. Создаем будущее сегодня.</p>
        </div>
      </footer>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-3xl">
              {projects.find(p => p.id === selectedProject)?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {projects.find(p => p.id === selectedProject)?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <img 
              src={projects.find(p => p.id === selectedProject)?.image} 
              alt="" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-semibold mb-2">Технологии:</h4>
              <div className="flex flex-wrap gap-2">
                {projects.find(p => p.id === selectedProject)?.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;